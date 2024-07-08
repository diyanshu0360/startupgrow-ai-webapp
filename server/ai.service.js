import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnableWithMessageHistory,
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  modelName: "gpt-4o",
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are an experienced content expert who writes marketing content from the website content provided to you. Strictly give asked content as output. Consider yourself as 'I'. Strictly avoid writing content in 3rd person.",
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

const filterMessages = ({ chat_history }) => {
  return chat_history.slice(-10);
};

const createChain = (model) => {
  return RunnableSequence.from([
    RunnablePassthrough.assign({ chat_history: filterMessages }),
    prompt,
    model,
  ]);
};

export const handleUserInteraction = async (
  sessionId,
  initialContent,
  userMessages
) => {
  const messageHistories = {};

  const getMessageHistory = async (sessionId) => {
    if (!messageHistories[sessionId]) {
      const messageHistory = new InMemoryChatMessageHistory();
      messageHistories[sessionId] = messageHistory;
    }
    return messageHistories[sessionId];
  };

  const chain = createChain(model);

  const withMessageHistory = new RunnableWithMessageHistory({
    runnable: chain,
    getMessageHistory: getMessageHistory,
    inputMessagesKey: "input",
    historyMessagesKey: "chat_history",
  });

  const initializeSession = async (sessionId, initialContent) => {
    const messageHistory = await withMessageHistory.getMessageHistory(
      sessionId
    );
    await messageHistory.addMessages([
      new HumanMessage({
        content: `Given is the product's landing page website content: ${initialContent}`,
      }),
    ]);
  };

  await initializeSession(sessionId, initialContent);

  const config = { configurable: { sessionId } };

  let responseArray = [];
  for (const userInput of userMessages) {
    const response = await withMessageHistory.invoke(
      { input: userInput },
      config
    );
    responseArray.push(response);
  }

  return responseArray;
};

// Import necessary modules
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnableWithMessageHistory,
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize the OpenAI model
const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

// Define the initial prompt
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are assitant which create marketing content from the website content provided to you.`,
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

// Function to filter messages to the last 10
const filterMessages = ({ chat_history }) => {
  return chat_history.slice(-10);
};

// Create the chain with filtering
const createChain = (model) => {
  return RunnableSequence.from([
    RunnablePassthrough.assign({ chat_history: filterMessages }),
    prompt,
    model,
  ]);
};

// Function to handle user interactions
export const handleUserInteraction = async (
  sessionId,
  initialContent,
  userMessages
) => {
  // Initialize message histories
  const messageHistories = {};

  // Define the message history retrieval function
  const getMessageHistory = async (sessionId) => {
    if (messageHistories[sessionId] === undefined) {
      const messageHistory = new InMemoryChatMessageHistory();
      messageHistories[sessionId] = messageHistory;
    }
    return messageHistories[sessionId];
  };

  // Create the chain
  const chain = createChain(model);

  // Initialize RunnableWithMessageHistory
  const withMessageHistory = new RunnableWithMessageHistory({
    runnable: chain,
    getMessageHistory: getMessageHistory,
    inputMessagesKey: "input",
    historyMessagesKey: "chat_history",
  });

  // Initialize session with initial content
  const initializeSession = async (sessionId, initialContent) => {
    const messageHistory = await withMessageHistory.getMessageHistory(
      sessionId
    );
    await messageHistory.addMessages([
      new HumanMessage({
        content: `Scrape the website content: ${initialContent}`,
      }),
    ]);
  };

  // Initialize session with the provided initial content
  await initializeSession(sessionId, initialContent);

  // Config for the session
  const config = { configurable: { sessionId } };

  // Handle user messages
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

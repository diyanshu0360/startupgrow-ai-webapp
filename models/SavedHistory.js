import mongoose from "mongoose";

const { Schema } = mongoose;

const savedHistorySchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    allProductHistory: {
      type: [
        {
          productId: { type: String, unique: true, required: true },
          productName: { type: String, required: true },
          productUrl: { type: String, required: true },
          initalContnet: { type: String, required: true},
          contentOption: { type: String, required: true },
          productDescriptionContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          redditContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          hackerNewsContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          productHuntContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          linkedInContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          twitterContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          blogContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          coldEmailContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          coldMessageContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          freeToolIdeaContent: {
            responseContent: { type: [String], required: true },
            cycleCompleted: { type: Boolean, required: true },
          },
          createdAt: { type: Date, required: true },
        },
      ],
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.SavedHistory ||
  mongoose.model("SavedHistory", savedHistorySchema);

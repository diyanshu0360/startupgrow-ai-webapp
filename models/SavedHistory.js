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
          contentOption: { type: String, required: true },
          linkedInContent: { type: [String], required: true },
          twitterContent: { type: [String], required: true },
          timestamps: true,
        },
      ],
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.SavedHistory ||
  mongoose.model("SavedHistory", savedHistorySchema);

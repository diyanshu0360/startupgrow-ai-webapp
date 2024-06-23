import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    planPrice: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    updated_at: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);

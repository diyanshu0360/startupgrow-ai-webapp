import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    avtarUrl: {
      type: String,
      required: false,
    },
    isLifeTime: {
      type: Boolean,
      required: true,
    },
    playType: {
      type: String,
      required: true,
    },
    productCredits: {
      type: Number,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: false,
    },
    providerId: {
      type: String,
      required: false,
    },
    accessToken: {
      type: String,
      required: false,
    },
    idToken: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

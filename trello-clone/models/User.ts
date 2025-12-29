import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    associatedBoards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Board",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.User || mongoose.model("User", UserSchema);

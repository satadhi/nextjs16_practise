import mongoose, { Schema, models } from "mongoose";

const BoardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

export default models.Board || mongoose.model("Board", BoardSchema);

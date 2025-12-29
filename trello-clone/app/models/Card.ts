import mongoose, { Schema, models } from "mongoose";

export const CARD_STATUS = ["TODO", "ONGOING", "DONE"] as const;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "TODO",
      index: true,
    },

    order: {
      type: Number,
      required: true,
      index: true,
    },

    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
      index: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Card || mongoose.model("Card", CardSchema);

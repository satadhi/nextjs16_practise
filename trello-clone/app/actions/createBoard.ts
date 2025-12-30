"use server";

import User from "@/models/User";
import Board from "@/models/Board";
import connectMongo from "@/lib/mongoose";

export default async function createBoardForUser(
  userId: string,
  boardName: string
) {
  if (!userId || !boardName) {
    throw new Error("Missing userId or boardName");
  }

  await connectMongo();

  try {
    // 1. Create Board
    const board = await Board.create({
      name: boardName,
      createdBy: userId,
    });

    // 2. Attach board to user
    await User.findByIdAndUpdate(userId, {
      $push: { associatedBoards: board._id },
    });

    return { success: true, boardId: board._id };
  } catch (error) {
    console.error(error);
    throw new Error("Internal Error Unable to create board");
  }
}

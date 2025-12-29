"use server";

import connectMongo from "@/lib/mongoose";
import User from "@/models/User";

export async function createUser(formData: FormData) {
  const userName = formData.get("username") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  if (!userName || !email) {
    return { error: "Username and email are required" };
  }

  await connectMongo();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await User.create({ userName, email, role });

  return { success: true };
}

"use server";

import {prisma} from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const fetchUsers = async () => {
  try {
    const clerkUser = await currentUser();
    console.log("Clerk User:", clerkUser); // Debug log

    if (!clerkUser) {
      return { error: "No Clerk user found", data: null };
    }

    let mongoUser = await prisma.user.findUnique({
      where: {
        clerkUserId: clerkUser.id,
      },
    });

    if (!mongoUser) {
      const username = clerkUser.username || `${clerkUser.firstName} ${clerkUser.lastName}`;
      mongoUser = await prisma.user.create({
        data: {
          clerkUserId: clerkUser.id,
          username,
          email: clerkUser.emailAddresses[0].emailAddress,
          profilePic: clerkUser.imageUrl,
        },
      });
    }

    const quizResults = await prisma.quizResult.findMany({
      where: {
        userId: mongoUser.id,
      },
    });

    return {
      data: {
        user: mongoUser,
        quizResults,
      },
    };
  } catch (error) {
    console.error("Error in fetchUsers:", error); // Debug log
    return { error: "Failed to fetch users", data: null };
  }
};

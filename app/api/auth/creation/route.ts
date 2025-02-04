import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  return NextResponse.json({
    data: {
      userId,
      username: user?.username,
      email: user?.emailAddresses[0].emailAddress,
    },
  });
}

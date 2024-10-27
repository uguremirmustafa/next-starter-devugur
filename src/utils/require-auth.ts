import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import options from "@/config/auth";

/**
 * helper function to check for session.
 * call this on any page that requires auth.
 *
 * we cannot use middleware while using database strategy with next auth due to edge runtime stuff.
 *
 * Check out cj talking about this issue:
 * https://youtu.be/dLRKV-bajS4?t=7608
 */
export default async function requireAuth() {
  const session = await getServerSession(options);
  if (!session?.user) {
    redirect("/");
  }
}

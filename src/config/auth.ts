import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

import db from "@/db";
import { env } from "@/env/server";

const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
  },
  adapter: DrizzleAdapter(db),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
};

export default options;

import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

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
};

export default options;

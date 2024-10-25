import { createEnv } from "@t3-oss/env-core";
import { ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.coerce.number(),
  },

  // eslint-disable-next-line n/no-process-env
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    console.error(
      `❌ Attempted to access a server-side environment variable on the client: ${variable}`
    );
    process.exit(1);
  },
});

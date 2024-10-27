"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { parseWithZod } from "@conform-to/zod";
import { getServerSession } from "next-auth";

import options from "@/config/auth";
import db from "@/db";
import advices, { InsertAdviceSchema } from "@/db/schema/advices";
import requireAuth from "@/utils/require-auth";

export async function createAdvice(prevState: unknown, formData: FormData) {
  await requireAuth();

  const submission = parseWithZod(formData, {
    schema: InsertAdviceSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const session = (await getServerSession(options))!;

  await db.insert(advices).values({
    userId: session.user.id,
    description: submission.value.description,
  });

  revalidatePath("/advices");
  redirect("/advices");
}

import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import users from "./users";

const advices = pgTable("advices", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  description: varchar("description", { length: 512 }).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

export const advicesRelations = relations(advices, ({ one }) => ({
  user: one(users, { fields: [advices.userId], references: [users.id] }),
}));

export const InsertAdviceSchema = createInsertSchema(advices).omit({
  createdAt: true,
  id: true,
  userId: true,
});

export default advices;

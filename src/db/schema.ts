import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const waitlist = sqliteTable('waitlist', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  createdAt: text('created_at').notNull(),
});
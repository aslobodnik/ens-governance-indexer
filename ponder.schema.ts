import { onchainTable } from "@ponder/core";

export const Vote = onchainTable("Vote", (t) => ({
  id: t.text().primaryKey(),
  voter: t.hex().notNull(),
  proposalId: t.bigint().notNull(),
  support: t.integer().notNull(),
  weight: t.bigint().notNull(),
  reason: t.text().notNull(),
  timestamp: t.bigint().notNull(),
}));

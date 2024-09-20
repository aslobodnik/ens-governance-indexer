import { ponder } from "@/generated";

ponder.on("EnsGovernorContract:VoteCast", async ({ event, context }) => {
  const { Vote } = context.db;

  await Vote.create({
    id: event.transaction.hash,
    data: {
      voter: event.args.voter,
      proposalId: event.args.proposalId,
      support: event.args.support,
      weight: event.args.weight,
      reason: event.args.reason,
      timestamp: event.block.timestamp,
    },
  });
});

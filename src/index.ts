import { ponder } from "@/generated";

ponder.on("EnsGovernorContract:VoteCast", async ({ event, context }) => {
  const { Vote } = context.db;

  await Vote.create({
    id: `${event.args.proposalId}-${event.args.voter}`,
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

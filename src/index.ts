import { ponder } from "@/generated";
import { Vote } from "../ponder.schema";

ponder.on("EnsGovernorContract:VoteCast", async ({ event, context }) => {
  await context.db.insert(Vote).values({
    id: `${event.args.proposalId}-${event.args.voter}`,
    voter: event.args.voter,
    proposalId: event.args.proposalId,
    support: event.args.support,
    weight: event.args.weight,
    reason: event.args.reason,
    timestamp: event.block.timestamp,
  });
});

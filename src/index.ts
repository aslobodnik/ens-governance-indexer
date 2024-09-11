import { ponder } from "@/generated";

ponder.on("ExampleContractAbi:VoteCast", async ({ event, context }) => {
  const { Votes } = context.db;

  await Votes.create({
    id: event.transaction.hash,
   
    data: {
      voter: event.
    },
  });
});

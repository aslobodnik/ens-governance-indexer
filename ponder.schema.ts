import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Votes: p.createTable({
    id: p.string(),
    voter: p.hex(),
    proposalId: p.bigint(),
    support: p.int(),
    weight: p.int(),
    reason: p.string(),
  }),
}));

import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Vote: p.createTable({
    id: p.hex(),
    voter: p.hex(),
    proposalId: p.bigint(),
    support: p.int(),
    weight: p.bigint(),
    reason: p.string(),
    timestamp: p.bigint(),
  }),
}));

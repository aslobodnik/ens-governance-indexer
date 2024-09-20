import { createConfig } from "@ponder/core";
import { http } from "viem";

import { EnsGovernorAbi } from "./abis/EnsGovernorAbi";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    EnsGovernorContract: {
      network: "mainnet",
      abi: EnsGovernorAbi,
      address: "0x323A76393544d5ecca80cd6ef2A560C6a395b7E3",
      startBlock: 13533772,
    },
  },
});

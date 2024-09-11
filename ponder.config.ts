import { createConfig } from "@ponder/core";
import { http } from "viem";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    ExampleContract: {
      network: "mainnet",
      abi: ExampleContractAbi,
      address: "0x323A76393544d5ecca80cd6ef2A560C6a395b7E3",
      startBlock: 19663381,
    },
  },
});

import type { GetEntry } from "wakuwork";

export const getEntry: GetEntry = async (id) => {
  switch (id) {
    case "App":
      return import("./src/App");
    case "InnerApp":
      return import("./src/InnerApp");
    default:
      throw new Error(`Unknown entry id: ${id}`);
  }
};
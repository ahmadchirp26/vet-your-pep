import { type ListChannelsInput } from "@/__generated__/graphql";

export const userAllFeedsKeys = {
  all: ["userAllFeeds"] as const,
  list: (filters: ListChannelsInput) =>
    [...userAllFeedsKeys.all, "lists", filters] as const,
};

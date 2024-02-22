import { type ListPostsInput } from "@/__generated__/graphql";

export const postKeys = {
  all: ["posts"] as const,
  list: (filters: ListPostsInput) =>
    [...postKeys.all, "lists", filters] as const,
};

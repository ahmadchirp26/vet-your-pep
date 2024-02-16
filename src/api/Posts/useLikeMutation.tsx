import { graphQlRequestHandler, graphql } from "@/core/lib/react-query-graphql";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";

const LIKE_MUTATION = graphql(`
  mutation createPostLike($input: CreateLikeInput!) {
    createPostLike(input: $input) {
      message
    }
  }
`);

export const useLikeMutation = () => {
  return useGraphQLMutationProtected({}, LIKE_MUTATION);
};

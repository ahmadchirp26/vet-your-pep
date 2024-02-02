import {
  type UseQueryOptions,
  useQuery,
  type UseMutationOptions,
  useMutation,
  type UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import request from "graphql-request";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { type Variables, type ClientError } from "graphql-request";
import { env } from "@/env";
import { graphql } from "@/__generated__";
import {
  type VariablesAndRequestHeadersArgs,
  type GraphQLClientRequestHeaders,
} from "node_modules/graphql-request/build/esm/types";

export function useGraphQLQuery<TResult, TVariables>(
  queryOptions: UseQueryOptions<TResult>,
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables,
  requestHeaders?: GraphQLClientRequestHeaders,
) {
  return useQuery({
    ...queryOptions,
    queryFn: async () => {
      return await request(
        env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
        document,
        variables,
        requestHeaders,
      );
    },
  });
}

export function useGraphQLInfiniteQuery<TResult, TVariables>(
  queryOptions: UseInfiniteQueryOptions<TResult>,
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables,
  requestHeaders?: GraphQLClientRequestHeaders,
) {
  return useInfiniteQuery({
    ...queryOptions,
    queryKey: variables
      ? [...queryOptions.queryKey, variables]
      : queryOptions.queryKey,
    queryFn: async () => {
      return await request(
        env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
        document,
        variables,
        requestHeaders,
      );
    },
  });
}

export function useGraphQLMutation<
  TResult,
  TVariables extends Variables,
  TError = ClientError,
  TContext = unknown,
>(
  mutationOptions: UseMutationOptions<
    TResult,
    TError,
    VariablesAndRequestHeadersArgs<TVariables>,
    TContext
  >,
  document: TypedDocumentNode<TResult, TVariables>,
) {
  return useMutation<
    TResult,
    TError,
    VariablesAndRequestHeadersArgs<TVariables>,
    TContext
  >({
    ...mutationOptions,
    mutationFn: async (variables) => {
      return await request(
        env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
        document,
        ...variables,
      );
    },
  });
}
export async function requestGraphQl<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: VariablesAndRequestHeadersArgs<TVariables>,
) {
  return await request(
    env.NEXT_PUBLIC_SERVER_GRAPHQL_URL,
    document,
    ...variables,
  );
}

export { graphql };

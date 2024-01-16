import {
  useGraphQLMutation,
  useGraphQLQuery,
} from "@/core/lib/react-query-graphql";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { type Variables } from "graphql-request";
import {
  type ClientError,
  type VariablesAndRequestHeadersArgs,
} from "node_modules/graphql-request/build/esm/types";

function useGraphQLQueryProtected<T, D>(
  ...params: Parameters<typeof useGraphQLQuery<T, D>>
) {
  const [queryKey, query, variables] = params;
  const { data } = useAuthSessionContext();
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${data?.accessToken}`,
  });
  return useGraphQLQuery(queryKey, query, variables, authourizationHeaders);
}

function useGraphQLMutationProtected<
  T,
  D extends Variables,
  E = ClientError,
  C = unknown,
>(...params: Parameters<typeof useGraphQLMutation<T, D, E, C>>) {
  const { data } = useAuthSessionContext();
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${data?.accessToken}`,
  });
  const { mutate, mutateAsync, ...rest } = useGraphQLMutation<T, D, E, C>(
    ...params
  );
  return {
    ...rest,
    mutate: (variables: D, options?: Parameters<typeof mutate>[1]) =>
      mutate(
        [
          variables,
          authourizationHeaders,
        ] as unknown as VariablesAndRequestHeadersArgs<D>,
        options
      ),
    mutateAsync: (variables: D, options?: Parameters<typeof mutateAsync>[1]) =>
      mutateAsync(
        [
          variables,
          authourizationHeaders,
        ] as unknown as VariablesAndRequestHeadersArgs<D>,
        options
      ),
  };
}
export { useGraphQLQueryProtected, useGraphQLMutationProtected };

import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { type Variables } from "graphql-request";
import { graphQlRequestHandler } from "./react-query-graphql";

export const useGraphQLRequestHandlerProtected = () => {
  const { data } = useAuthSessionContext();
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${data?.accessToken}`,
  });
  return <TResult, TVariables extends Variables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables: TVariables
  ) => graphQlRequestHandler(document, variables, authourizationHeaders);
};

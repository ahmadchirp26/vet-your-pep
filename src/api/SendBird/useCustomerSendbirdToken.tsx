import { graphQlRequestHandler, graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getSessionServerAction } from "../Authentication/getSessionServerAction";

const GetChatToken = graphql(`
  query GetChatToken {
    getChatToken
  }
`);

export const useCustomerSendbirdToken = () => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: ["chat"],
    queryFn: () => {
      return protectedRequestHandler(GetChatToken, {});
    },
  });
};
export const fetchCustomerSendBirdTokenServerSide = async (
  queryClient = new QueryClient()
) => {
  const token = await getSessionServerAction();
  if (!token) {
    throw {
      status: 401,
      message: "Unauthorized",
    };
  }
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${token.accessToken}`,
  });
  try {
    const data = await queryClient.fetchQuery({
      queryKey: ["chat"],
      queryFn: () =>
        graphQlRequestHandler(GetChatToken, {}, authourizationHeaders),
    });
    return {
      data,
      queryClient,
    };
  } catch (error) {
    throw {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

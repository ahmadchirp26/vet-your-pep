import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { env } from "@/env";
import { useQuery } from "@tanstack/react-query";

const GetChatToken = graphql(`
  query GetChatToken {
    getChatToken
  }
`);

export const useGetToken = () => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: ["chat"],
    queryFn: () => {
      return protectedRequestHandler(GetChatToken, {});
    },
  });
};

import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";

const GET_PLATFORM_RULES_QUERY = graphql(`
  query GetPlatFormRules($input: ListPlatFormRulesInput!) {
    getPlatFormRules(input: $input) {
      limit
      offset
      totalRows
      results {
        createdBy
        createdDate
        id
        rules
        title
        updatedBy
        updatedDate
      }
    }
  }
`);

const rulesQuery = ["platformRules"];

export const usePlatformRules = () => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();

  return useQuery({
    queryKey: rulesQuery,
    queryFn: () => {
      return protectedRequestHandler(GET_PLATFORM_RULES_QUERY, {
        input: {
          filter: {},
          limit: 100,
          offset: 0,
        },
      });
    },
  });
};

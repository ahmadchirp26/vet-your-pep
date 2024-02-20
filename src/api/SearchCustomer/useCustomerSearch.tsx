import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";

const GET_CUSTOMER_SEARCH_QUERY = graphql(`
  query SearchCustomers($search: String!) {
    searchCustomers(search: $search) {
      totalCount
      results {
        cellPhone
        email
        firstName
        id
        isActive
        lastName
        profileImage
        password
        stripeCustomerId
        totalFollowers
        totalFollowings
      }
    }
  }
`);

export const useCustomerSearch = (searchQuery: string) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();

  const response = useQuery({
    queryKey: ["searchCustomers", searchQuery],
    queryFn: () => {
      return protectedRequestHandler(GET_CUSTOMER_SEARCH_QUERY, {
        search: searchQuery,
      });
    },
  });
  return response;
};

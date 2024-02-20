import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";
import { env } from "@/env";

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
    select(data) {
      return {
        ...data,
        results: data?.searchCustomers?.results?.map((customer) => ({
          ...customer,
          profileImage: customer.profileImage
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${customer.profileImage}`
            : undefined,
        })),
      };
    },
  });
  return response;
};

import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { graphql } from "@/core/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
const Document = graphql(`
  query getOtherCustomerData($input: String!) {
    getOtherCustomerData(customerId: $input) {
      isFollowing
      user {
        id
        email
        firstName
        lastName
        profileImage
        role
        totalFollowers
        totalFollowings
        createdDate
        posts {
          body
          images
          channel {
            id
            title
          }
          comments {
            content
            id
            user {
              firstName
              lastName
              id
              email
              profileImage
            }
          }
          likeCount
          likes {
            id
            user
          }
        }
      }
    }
  }
`);

interface Props {
  customerId: string;
}
const useCustomerByIdDataQuery = ({ customerId }: Props) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: ["getOtherCustomerData", { customerId: customerId }],
    queryFn: () => {
      return protectedRequestHandler(Document, {
        input: customerId,
      });
    },
  });
};
export default useCustomerByIdDataQuery;

import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { env } from "@/env";
import { useQuery } from "@tanstack/react-query";
import { customerKeys } from "./query-keys";
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
        totalFollowers
        totalFollowings
        createdDate
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
    queryKey: customerKeys.detail(customerId),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(Document, {
        input: queryKey[1],
      });
    },
    select: (data) => {
      return {
        ...data,
        getOtherCustomerData: {
          ...data.getOtherCustomerData,
          user: {
            ...data.getOtherCustomerData.user,
            profileImage: data.getOtherCustomerData.user.profileImage
              ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getOtherCustomerData.user.profileImage}`
              : undefined,
          },
        },
      };
    },
  });
};
export type APICustomerByIdQueryData = ReturnType<
  typeof useCustomerByIdDataQuery
>["data"];
export default useCustomerByIdDataQuery;

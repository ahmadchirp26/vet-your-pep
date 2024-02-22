import { graphql } from "@/lib/react-query-graphql";
import { customerKeys } from "./query-keys";
import { useQuery } from "@tanstack/react-query";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { env } from "@/env";

const document = graphql(`
  #graphql
  query getFollowings($input: String!) {
    getFollowing(customerId: $input) {
      id
      email
      lastName
      firstName
      profileImage
    }
  }
`);

const useGetFollowings = ({ customerId }: { customerId: string }) => {
  const protectedHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: customerKeys.following(customerId),
    queryFn: () =>
      protectedHandler(document, {
        input: customerId,
      }),
    select(data) {
      return {
        ...data,
        getFollowing: data?.getFollowing.map((follower) => ({
          ...follower,
          profileImage: follower.profileImage
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${follower.profileImage}`
            : undefined,
        })),
      };
    },
  });
};
export default useGetFollowings;

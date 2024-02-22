import { graphql } from "@/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { customerKeys } from "./query-keys";
import { env } from "@/env";
const document = graphql(`
  #graphql
  query getFollowers($input: String!) {
    getFollowers(customerId: $input) {
      id
      email
      firstName
      lastName
      profileImage
    }
  }
`);
interface Props {
  customerId: string;  
}
const useGetFollowers = ({ customerId }: Props) => {
  const protectedHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: customerKeys.followers(customerId),
    queryFn: () =>
      protectedHandler(document, {
        input: customerId,
      }),
    select(data) {
      return {
        ...data,
        getFollowers: data?.getFollowers.map((follower) => ({
          ...follower,
          profileImage: follower.profileImage
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${follower.profileImage}`
            : undefined,
        })),
      };
    },
  });
};

export default useGetFollowers;

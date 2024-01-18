import { graphql, useGraphQLMutation } from "@/core/lib/react-query-graphql";
import { mutateSession } from "./mutateSession";
import { useToast } from "@/core/ui/use-toast";

const SocialLoginDocument = graphql(`
  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {
    continueWithSocialSite(input: $input) {
      user {
        id
        email
      }
      accessToken
    }
  }
`);

const mutationKey = ["socialLogin"];

const useSocialLoginMutation = () => {
  const { toast } = useToast();
  return useGraphQLMutation(
    {
      mutationKey,
      onError(error) {
        const firstError = error.response.errors?.find((e) => e.message);
        if (!firstError) return;
        toast({
          title: firstError.message,
          variant: "destructive",
        });
      },
      onSuccess(data) {
        return mutateSession({
          accessToken: data.continueWithSocialSite.accessToken,
          shouldBroadcast: true,
        });
      },
    },
    SocialLoginDocument,
  );
};
export default useSocialLoginMutation;

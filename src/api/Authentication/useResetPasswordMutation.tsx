import { graphql, useGraphQLMutation } from "@/lib/react-query-graphql";
import { useToast } from "@/components/ui/use-toast";

const ResetPasswordMutationDocument = graphql(`
  #graphql
  mutation resetPasswordCustomer($input: ResetForgotPasswordInput!) {
    resetPasswordCustomer(input: $input) {
      success
      message
    }
  }
`);

export function useResetPasswordMutation() {
  const { toast } = useToast();

  return useGraphQLMutation(
    {
      onError(error) {
        const firstError = error.response.errors?.find((e) => e.message);
        if (!firstError) return;
        toast({
          title: firstError.message,
          variant: "destructive",
        });
      },
      onSuccess(data) {
        if (data?.resetPasswordCustomer?.success) {
          const message = data.resetPasswordCustomer.message || "";
          toast({
            title: message,
            variant: "default",
          });
        }
      },
    },
    ResetPasswordMutationDocument
  );
}

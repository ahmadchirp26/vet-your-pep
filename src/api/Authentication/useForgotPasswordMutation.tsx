import { graphql, useGraphQLMutation } from "@/lib/react-query-graphql";
import { useToast } from "@/components/ui/use-toast";

const ForgetPasswordMutationDocument = graphql(`
  #graphql
  mutation forgotPasswordCustomer($input: ForgotPasswordInput!) {
    forgotPasswordCustomer(input: $input) {
      success
      message
    }
  }
`);

export function useForgetPasswordMutation() {
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
        if (data?.forgotPasswordCustomer?.success) {
          const message = data.forgotPasswordCustomer.message || "";
          toast({
            title: message,
            variant: "default",
          });
        }
      },
    },
    ForgetPasswordMutationDocument
  );
}

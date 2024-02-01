import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLQueryProtected } from "../helpers";
import { env } from "@/env";

const GetCustomerDataQueryDocument = graphql(`
  query getCustomerData {
    getCustomerData {
      cellPhone
      email
      firstName
      id
      isActive
      lastName
      mediaUrl
      password
      stripeCustomerId
    }
  }
`);

export const CustomerDataQueryKey = ["customer-data"];
const useCustomerDataQuery = () =>
  useGraphQLQueryProtected(
    {
      queryKey: CustomerDataQueryKey,
      select(data) {
        return {
          ...data,
          getCustomerData: {
            ...data.getCustomerData,
            mediaUrl: data.getCustomerData.mediaUrl
              ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getCustomerData.mediaUrl}`
              : null,
          },
        };
      },
    },
    GetCustomerDataQueryDocument
  );

export type useCustomerDataQueryDataType = ReturnType<
  typeof useCustomerDataQuery
>["data"];
export default useCustomerDataQuery;

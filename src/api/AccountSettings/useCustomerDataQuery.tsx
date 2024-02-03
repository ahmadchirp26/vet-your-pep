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
      profileImage
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
            profileImage: data.getCustomerData.profileImage
              ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getCustomerData.profileImage}`
              : null,
          },
        };
      },
    },
    GetCustomerDataQueryDocument,
  );

export type useCustomerDataQueryDataType = ReturnType<
  typeof useCustomerDataQuery
>["data"];
export default useCustomerDataQuery;

import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLQueryProtected } from "../helpers";

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
    },
    GetCustomerDataQueryDocument
  );

export type useCustomerDataQueryDataType = ReturnType<
  typeof useCustomerDataQuery
>["data"];
export default useCustomerDataQuery;

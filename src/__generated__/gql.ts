/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query getCustomerData {\n    getCustomerData {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      mediaUrl\n      password\n      stripeCustomerId\n    }\n  }\n":
    types.GetCustomerDataDocument,
  "\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      mediaUrl\n      socialProvider {\n        createdDate\n        id\n        provider\n        socialId\n      }\n      stripeCustomerId\n    }\n  }\n":
    types.UpdateCustomerMutationDocument,
  "\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n":
    types.CreateCustomerDocument,
  "\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n":
    types.LoginDocument,
  "\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n":
    types.ContinueWithSocialSiteDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getCustomerData {\n    getCustomerData {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      mediaUrl\n      password\n      stripeCustomerId\n    }\n  }\n",
): (typeof documents)["\n  query getCustomerData {\n    getCustomerData {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      mediaUrl\n      password\n      stripeCustomerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      mediaUrl\n      socialProvider {\n        createdDate\n        id\n        provider\n        socialId\n      }\n      stripeCustomerId\n    }\n  }\n",
): (typeof documents)["\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      mediaUrl\n      socialProvider {\n        createdDate\n        id\n        provider\n        socialId\n      }\n      stripeCustomerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n",
): (typeof documents)["\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n",
): (typeof documents)["\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n",
): (typeof documents)["\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

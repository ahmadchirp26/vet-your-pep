/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  idAdminUser: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  mediaUrl?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
};

export type AdminEmailUpdateResponse = {
  __typename?: 'AdminEmailUpdateResponse';
  accessToken: Scalars['String']['output'];
  user: Admin;
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  accessToken: Scalars['String']['output'];
  user: Admin;
};

export type Channels = {
  __typename?: 'Channels';
  channelsAbout?: Maybe<Scalars['String']['output']>;
  channelsImage?: Maybe<Scalars['String']['output']>;
  channelsRule?: Maybe<Scalars['String']['output']>;
  channelsTitle: Scalars['String']['output'];
  channelsbackgroundImage?: Maybe<Scalars['String']['output']>;
  idChannel: Scalars['ID']['output'];
  refIdModerator: Scalars['String']['output'];
};

export type ChannelsFilterInput = {
  channelsTitle?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdminUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateChannelsInput = {
  channelsAbout?: InputMaybe<Scalars['String']['input']>;
  channelsRule?: InputMaybe<Scalars['String']['input']>;
  channelsTitle: Scalars['String']['input'];
  refIdModerator: Scalars['String']['input'];
};

export type CreateChargeInput = {
  amount: Scalars['Float']['input'];
  customerId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  cellPhone?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  mediaUrl?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role: UserRole;
  socialProvider?: Maybe<SocialProvider>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
};

export type CustomerEmailUpdateResponse = {
  __typename?: 'CustomerEmailUpdateResponse';
  accessToken: Scalars['String']['output'];
  user: Customer;
};

export type CustomerFilterInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerLoginOrRegisterResponse = {
  __typename?: 'CustomerLoginOrRegisterResponse';
  accessToken: Scalars['String']['output'];
  user: Customer;
};

export type ListChannelsInputs = {
  filter?: InputMaybe<ChannelsFilterInput>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListChannelsResponse = {
  __typename?: 'ListChannelsResponse';
  results: Array<Channels>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type ListCustomersInputs = {
  filter?: InputMaybe<CustomerFilterInput>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListCustomersResponse = {
  __typename?: 'ListCustomersResponse';
  results: Array<Customer>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type LoginAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginCustomerInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Customer Social Registration */
  continueWithSocialSite: CustomerLoginOrRegisterResponse;
  /** Create new admin user */
  createAdminUser: SuccessResponse;
  /** This will create new Channels */
  createChannel: SuccessResponse;
  /** This will signup new Customers */
  createCustomer: CustomerLoginOrRegisterResponse;
  /** Admin Login */
  loginAsAdmin: AdminLoginResponse;
  /** Customer Login */
  loginAsCustomer: CustomerLoginOrRegisterResponse;
  /** This will a customer to moderator */
  makeModerator: SuccessResponse;
  /** This will save/update user profile image in DB */
  saveCustomerMediaUrl: Scalars['String']['output'];
  /** This will charge the Customer on test stripe */
  testCharge: SuccessResponse;
  /** Update admin data */
  updateAdminData: Scalars['String']['output'];
  /** Update admin email */
  updateAdminEmail: AdminEmailUpdateResponse;
  /** This will update Admin Password */
  updateAdminPassword: SuccessResponse;
  /** This will create new Channels */
  updateChannel: SuccessResponse;
  /** This will update Customer */
  updateCustomer: Customer;
  /** Update customer email */
  updateCustomerEmail: CustomerEmailUpdateResponse;
  /** This will update Customer Password */
  updateCustomerPassword: SuccessResponse;
};


export type MutationContinueWithSocialSiteArgs = {
  input: RegisterOrLoginSocialInput;
};


export type MutationCreateAdminUserArgs = {
  input: CreateAdminUserInput;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelsInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationLoginAsAdminArgs = {
  input: LoginAdminInput;
};


export type MutationLoginAsCustomerArgs = {
  input: LoginCustomerInput;
};


export type MutationMakeModeratorArgs = {
  input: Scalars['String']['input'];
};


export type MutationSaveCustomerMediaUrlArgs = {
  fileName: Scalars['String']['input'];
};


export type MutationTestChargeArgs = {
  chargeInput: CreateChargeInput;
};


export type MutationUpdateAdminDataArgs = {
  input: UpdateAdminUserInput;
};


export type MutationUpdateAdminEmailArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateAdminPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelsInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerEmailArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateCustomerPasswordArgs = {
  password: Scalars['String']['input'];
};

export type PageData = {
  __typename?: 'PageData';
  count: Scalars['Float']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** The List of Channels with Pagination and filters */
  getAllChannelsWithPagination: ListChannelsResponse;
  /** Get S3 bucket Signed Url */
  getChannelsUploadUrl: S3SignedUrlResponse;
  /** Get the Customer */
  getCustomerData: Customer;
  /** Get S3 bucket Signed Url */
  getCustomerUploadUrl: S3SignedUrlResponse;
  /** The List of Customers with Pagination and filters */
  getCustomersAdmin: ListCustomersResponse;
  /** check if email already exist */
  validEmailAdmin: SuccessResponse;
};


export type QueryGetAllChannelsWithPaginationArgs = {
  input: ListChannelsInputs;
};


export type QueryGetCustomersAdminArgs = {
  input: ListCustomersInputs;
};


export type QueryValidEmailAdminArgs = {
  input: Scalars['String']['input'];
};

export type RegisterOrLoginSocialInput = {
  accessToken: Scalars['String']['input'];
  provider: SocialAuthProviders;
};

export type S3SignedUrlResponse = {
  __typename?: 'S3SignedUrlResponse';
  fileName: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
};

/** Social provider types */
export enum SocialAuthProviders {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export type SocialProvider = {
  __typename?: 'SocialProvider';
  createdDate: Scalars['DateTime']['output'];
  customer: Customer;
  id: Scalars['ID']['output'];
  provider: SocialAuthProviders;
  socialId: Scalars['String']['output'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChannelsInput = {
  channelsAbout?: InputMaybe<Scalars['String']['input']>;
  channelsRule?: InputMaybe<Scalars['String']['input']>;
  channelsTitle: Scalars['String']['input'];
  idChannel: Scalars['ID']['input'];
};

export type UpdateCustomerInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
};

/** The role of Users */
export enum UserRole {
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type CreateCustomerMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'CustomerLoginOrRegisterResponse', accessToken: string, user: { __typename?: 'Customer', id: string, email: string, firstName: string, lastName: string } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginAsCustomer: { __typename?: 'CustomerLoginOrRegisterResponse', accessToken: string, user: { __typename?: 'Customer', id: string, email: string, firstName: string, lastName: string } } };

export type ContinueWithSocialSiteMutationVariables = Exact<{
  input: RegisterOrLoginSocialInput;
}>;


export type ContinueWithSocialSiteMutation = { __typename?: 'Mutation', continueWithSocialSite: { __typename?: 'CustomerLoginOrRegisterResponse', accessToken: string, user: { __typename?: 'Customer', id: string, email: string } } };


export const CreateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAsCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ContinueWithSocialSiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"continueWithSocialSite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterOrLoginSocialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continueWithSocialSite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<ContinueWithSocialSiteMutation, ContinueWithSocialSiteMutationVariables>;
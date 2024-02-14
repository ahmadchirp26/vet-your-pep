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
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profileImage?: Maybe<Scalars['String']['output']>;
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

export type Channel = {
  __typename?: 'Channel';
  about?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isPaid: Scalars['Boolean']['output'];
  members?: Maybe<Array<ChannelMember>>;
  moderator: Customer;
  moderatorId: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  price?: Maybe<Scalars['Float']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  status: ChannelStatus;
  title: Scalars['String']['output'];
  totalMembers?: Maybe<Scalars['Int']['output']>;
};

export type ChannelFilterInputs = {
  search?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ChannelMember = {
  __typename?: 'ChannelMember';
  channel: Channel;
  customer: Customer;
  id: Scalars['ID']['output'];
  paidStatus: Scalars['Boolean']['output'];
  roleChannel: ChannelUserRole;
};

/** The status of channels */
export enum ChannelStatus {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** The status of ChannelUserRole */
export enum ChannelUserRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR'
}

export type CreateAdminUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateChannelInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  moderatorId: Scalars['String']['input'];
  rules?: InputMaybe<Scalars['String']['input']>;
  status?: ChannelStatus;
  title: Scalars['String']['input'];
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateChargeInput = {
  amount: Scalars['Int']['input'];
  customerId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  channelId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Customer = {
  __typename?: 'Customer';
  cellPhone?: Maybe<Scalars['String']['output']>;
  channels?: Maybe<Array<Channel>>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followers?: Maybe<Array<CustomerFollower>>;
  following?: Maybe<Array<CustomerFollower>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  likes?: Maybe<Array<Likes>>;
  password: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  profileImage?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  socialProvider?: Maybe<SocialProvider>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  totalFollowers?: Maybe<Scalars['Int']['output']>;
  totalFollowings?: Maybe<Scalars['Int']['output']>;
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
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerFollower = {
  __typename?: 'CustomerFollower';
  followers?: Maybe<Customer>;
  following?: Maybe<Customer>;
  id: Scalars['ID']['output'];
};

export type CustomerLoginOrRegisterResponse = {
  __typename?: 'CustomerLoginOrRegisterResponse';
  accessToken: Scalars['String']['output'];
  user: Customer;
};

export type Likes = {
  __typename?: 'Likes';
  id: Scalars['ID']['output'];
  user: Scalars['String']['output'];
};

export type ListChannelsInput = {
  filter?: InputMaybe<ChannelFilterInputs>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListChannelsResponse = {
  __typename?: 'ListChannelsResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
  results: Array<Channel>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

export type ListCustomersInputs = {
  filter?: InputMaybe<CustomerFilterInput>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListCustomersResponse = {
  __typename?: 'ListCustomersResponse';
  limit: Scalars['Float']['output'];
  offset?: Maybe<Scalars['Float']['output']>;
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
  /** This will create new Channel */
  createChannel: SuccessResponse;
  /** This will signup new Customers */
  createCustomer: CustomerLoginOrRegisterResponse;
  /** This will create new Post */
  createPost: SuccessResponse;
  /** This will follow a customer */
  followCustomer: SuccessResponse;
  /** This will create new Channel */
  joinChannel: SuccessResponse;
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
  /** This will unfollow a customer */
  unfollowCustomer: SuccessResponse;
  /** Update admin data */
  updateAdminData: Scalars['String']['output'];
  /** Update admin email */
  updateAdminEmail: AdminEmailUpdateResponse;
  /** This will update Admin Password */
  updateAdminPassword: SuccessResponse;
  /** This will create new Channel */
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
  input: CreateChannelInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationFollowCustomerArgs = {
  customerId: Scalars['String']['input'];
};


export type MutationJoinChannelArgs = {
  channelId: Scalars['String']['input'];
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


export type MutationUnfollowCustomerArgs = {
  customerId: Scalars['String']['input'];
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
  input: UpdateChannelInput;
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
  count: Scalars['Int']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String']['output'];
  channel?: Maybe<Channel>;
  customer: Customer;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Array<Likes>>;
};

export type Query = {
  __typename?: 'Query';
  /** This will create get a Channel */
  getChannelById: Channel;
  /** Get S3 bucket Signed Url */
  getChannelUploadUrl: S3SignedUrlResponse;
  /** Get the Customer */
  getCustomerData: Customer;
  /** Get S3 bucket Signed Url */
  getCustomerUploadUrl: S3SignedUrlResponse;
  /** The List of Customers with Pagination and filters */
  getCustomersAdmin: ListCustomersResponse;
  /** Get the followers of the authenticated customer */
  getFollowers: Array<Customer>;
  /** Get the followers of the authenticated customer */
  getFollowing: Array<Customer>;
  /** The List of Channel user have joined with Pagination and filters */
  getMyChannels: ListChannelsResponse;
  /** Get S3 bucket Signed Url */
  getPostUploadUrls: Array<S3SignedUrlResponse>;
  /** The List of Channel with Pagination and filters */
  listChannels: ListChannelsResponse;
  /** The List of Customers with filters */
  searchCustomers: SearchCustomersResponse;
  /** check if email already exist */
  validEmailAdmin: SuccessResponse;
};


export type QueryGetChannelByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetCustomersAdminArgs = {
  input: ListCustomersInputs;
};


export type QueryGetMyChannelsArgs = {
  input: ListChannelsInput;
};


export type QueryGetPostUploadUrlsArgs = {
  count: Scalars['Float']['input'];
};


export type QueryListChannelsArgs = {
  input: ListChannelsInput;
};


export type QuerySearchCustomersArgs = {
  search: Scalars['String']['input'];
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

export type SearchCustomersResponse = {
  __typename?: 'SearchCustomersResponse';
  message?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Customer>>;
  totalCount?: Maybe<Scalars['Float']['output']>;
};

/** Social provider types */
export enum SocialAuthProviders {
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
  profileImage?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChannelInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  rules?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateCustomerInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
};

/** The role of Users */
export enum UserRole {
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type GetCustomerDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerDataQuery = { __typename?: 'Query', getCustomerData: { __typename?: 'Customer', cellPhone?: string | null, email: string, firstName: string, id: string, isActive?: boolean | null, lastName: string, profileImage?: string | null, password: string, stripeCustomerId?: string | null } };

export type UpdateCustomerMutationMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutationMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', cellPhone?: string | null, email: string, firstName: string, id: string, isActive?: boolean | null, lastName: string, profileImage?: string | null, stripeCustomerId?: string | null, socialProvider?: { __typename?: 'SocialProvider', createdDate: any, id: string, provider: SocialAuthProviders, socialId: string } | null } };

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

export type GetChannelByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetChannelByIdQuery = { __typename?: 'Query', getChannelById: { __typename?: 'Channel', backgroundImage?: string | null, image?: string | null, price?: number | null, about?: string | null, id: string, isPaid: boolean, rules?: string | null, status: ChannelStatus, totalMembers?: number | null, title: string, posts?: Array<{ __typename?: 'Post', body: string, images?: Array<string> | null, likeCount?: number | null, customer: { __typename?: 'Customer', email: string, firstName: string, lastName: string, id: string, profileImage?: string | null }, likes?: Array<{ __typename?: 'Likes', id: string, user: string }> | null }> | null, members?: Array<{ __typename?: 'ChannelMember', id: string, paidStatus: boolean, roleChannel: ChannelUserRole, customer: { __typename?: 'Customer', id: string, firstName: string, lastName: string, email: string, profileImage?: string | null } }> | null, moderator: { __typename?: 'Customer', firstName: string, lastName: string, id: string, email: string, profileImage?: string | null } } };

export type GetAllChannelsWithPaginationQueryVariables = Exact<{
  input: ListChannelsInput;
}>;


export type GetAllChannelsWithPaginationQuery = { __typename?: 'Query', getMyChannels: { __typename?: 'ListChannelsResponse', limit: number, offset?: number | null, totalRows?: number | null, results: Array<{ __typename?: 'Channel', id: string, backgroundImage?: string | null, image?: string | null, price?: number | null, rules?: string | null, status: ChannelStatus, title: string, about?: string | null, isPaid: boolean, members?: Array<{ __typename?: 'ChannelMember', id: string, paidStatus: boolean, roleChannel: ChannelUserRole }> | null }> } };

export type JoinChannelMutationVariables = Exact<{
  channelId: Scalars['String']['input'];
}>;


export type JoinChannelMutation = { __typename?: 'Mutation', joinChannel: { __typename?: 'SuccessResponse', message?: string | null, success?: boolean | null } };

export type GetAllChannelsWithPagination3QueryVariables = Exact<{
  input: ListChannelsInput;
}>;


export type GetAllChannelsWithPagination3Query = { __typename?: 'Query', listChannels: { __typename?: 'ListChannelsResponse', limit: number, offset?: number | null, totalRows?: number | null, results: Array<{ __typename?: 'Channel', id: string, title: string }> } };

export type GetAllChannelsWithPagination2QueryVariables = Exact<{
  input: ListChannelsInput;
}>;


export type GetAllChannelsWithPagination2Query = { __typename?: 'Query', listChannels: { __typename?: 'ListChannelsResponse', limit: number, offset?: number | null, totalRows?: number | null, results: Array<{ __typename?: 'Channel', id: string, title: string }> } };

export type GetCustomerSignedUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerSignedUrlQuery = { __typename?: 'Query', getCustomerUploadUrl: { __typename?: 'S3SignedUrlResponse', fileName: string, signedUrl: string } };


export const GetCustomerDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomerData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomerData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"stripeCustomerId"}}]}}]}}]} as unknown as DocumentNode<GetCustomerDataQuery, GetCustomerDataQueryVariables>;
export const UpdateCustomerMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCustomerMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"socialProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"socialId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stripeCustomerId"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerMutationMutation, UpdateCustomerMutationMutationVariables>;
export const CreateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAsCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ContinueWithSocialSiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"continueWithSocialSite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterOrLoginSocialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continueWithSocialSite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<ContinueWithSocialSiteMutation, ContinueWithSocialSiteMutationVariables>;
export const GetChannelByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChannelById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChannelById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPaid"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paidStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roleChannel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"moderator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelByIdQuery, GetChannelByIdQueryVariables>;
export const GetAllChannelsWithPaginationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllChannelsWithPagination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListChannelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyChannels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rules"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"isPaid"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paidStatus"}},{"kind":"Field","name":{"kind":"Name","value":"roleChannel"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsWithPaginationQuery, GetAllChannelsWithPaginationQueryVariables>;
export const JoinChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<JoinChannelMutation, JoinChannelMutationVariables>;
export const GetAllChannelsWithPagination3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllChannelsWithPagination3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListChannelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listChannels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsWithPagination3Query, GetAllChannelsWithPagination3QueryVariables>;
export const GetAllChannelsWithPagination2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllChannelsWithPagination2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListChannelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listChannels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"totalRows"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsWithPagination2Query, GetAllChannelsWithPagination2QueryVariables>;
export const GetCustomerSignedUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomerSignedURL"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomerUploadUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"signedUrl"}}]}}]}}]} as unknown as DocumentNode<GetCustomerSignedUrlQuery, GetCustomerSignedUrlQueryVariables>;
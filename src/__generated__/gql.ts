/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  query getCustomerData {\n    getCustomerData {\n      cellPhone\n      email\n      firstName\n      totalFollowers\n      totalFollowings\n      id\n      isActive\n      lastName\n      profileImage\n      password\n      stripeCustomerId\n      followers {\n        id\n      }\n      following {\n        id\n      }\n      posts {\n        id\n      }\n    }\n  }\n": types.GetCustomerDataDocument,
    "\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      profileImage\n      socialProvider {\n        createdDate\n        id\n        provider\n        socialId\n      }\n      stripeCustomerId\n    }\n  }\n": types.UpdateCustomerMutationDocument,
    "\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n": types.CreateCustomerDocument,
    "\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n": types.ContinueWithSocialSiteDocument,
    "\n  #graphql\n  query getChannelById($input: String!) {\n    getChannelById(input: $input) {\n      backgroundImage\n      image\n      price\n      about\n      id\n      isPaid\n      rules\n      status\n      totalMembers\n      title\n      posts {\n        id\n        createdDate\n        body\n        images\n        customer {\n          id\n          firstName\n          lastName\n          email\n          profileImage\n        }\n        comments {\n          content\n          id\n          user {\n            firstName\n            lastName\n            id\n            email\n            profileImage\n          }\n        }\n\n        likeCount\n        likes {\n          id\n          user {\n            firstName\n            lastName\n            id\n            email\n            profileImage\n          }\n        } \n      }\n      members {\n        id\n        customer {\n          id\n          firstName\n          lastName\n          email\n          profileImage\n        }\n        paidStatus\n        roleChannel\n      }\n      moderator {\n        firstName\n        lastName\n        id\n        email\n        profileImage\n      }\n    }\n  }\n": types.GetChannelByIdDocument,
    "\n  #graphql\n  query getAllChannelsWithPagination($input: ListChannelsInput!) {\n    getChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        backgroundImage\n        image\n        price\n        rules\n        status\n        title\n        about\n        isPaid\n        members {\n          id\n          paidStatus\n          roleChannel\n        }\n      }\n    }\n  }\n": types.GetAllChannelsWithPaginationDocument,
    "\n  #graphql\n  mutation JoinChannel($channelId: String!) {\n    joinChannel(channelId: $channelId) {\n      message\n      success\n    }\n  }\n": types.JoinChannelDocument,
    "\n  #graphql\n  mutation updateChannel($input: UpdateChannelInput!) {\n    updateChannel(input: $input) {\n      message\n      success\n    }\n  }\n": types.UpdateChannelDocument,
    "\n  query getOtherCustomerData($input: String!) {\n    getOtherCustomerData(customerId: $input) {\n      isFollowing\n      user {\n        id\n        email\n        firstName\n        lastName\n        profileImage\n        totalFollowers\n        totalFollowings\n        createdDate\n        posts {\n          id\n          body\n          images\n          channel {\n            id\n            title\n          }\n          comments {\n            content\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n          likeCount\n          likes {\n            id\n            user {\n              id\n              email\n              firstName\n              lastName\n              profileImage\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetOtherCustomerDataDocument,
    "\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      message\n    }\n  }\n": types.CreateCommentDocument,
    "\n  mutation createPost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      message\n      success\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation likePost($input: CreateLikeInput!) {\n    likePost(input: $input) {\n      message\n    }\n  }\n": types.LikePostDocument,
    "\n  mutation unlikePost($input: UpdateLikeInput!) {\n    unlikePost(input: $input) {\n      message\n    }\n  }\n": types.UnlikePostDocument,
    "\n  query getUserAllFeeds($input: ListChannelsInput!) {\n    getChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        title\n        status\n        about\n        posts {\n          id\n          body\n          images\n          createdDate\n          channel {\n            id\n            title\n          }\n          comments {\n            content\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n          customer {\n            firstName\n            lastName\n            email\n            id\n            profileImage\n          }\n          likeCount\n          likes {\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetUserAllFeedsDocument,
    "\n  mutation FollowCustomer($customerId: String!) {\n    followCustomer(customerId: $customerId) {\n      message\n      success\n    }\n  }\n": types.FollowCustomerDocument,
    "\n  mutation UnfollowCustomer($customerId: String!) {\n    unfollowCustomer(customerId: $customerId) {\n      message\n      success\n    }\n  }\n": types.UnfollowCustomerDocument,
    "\n  query getPostUploadUrls($input: Float!) {\n    getPostUploadUrls(count: $input) {\n      fileName\n      signedUrl\n    }\n  }\n": types.GetPostUploadUrlsDocument,
    "\n  query getCustomerSignedURL {\n    getCustomerUploadUrl {\n      fileName\n      signedUrl\n    }\n  }\n": types.GetCustomerSignedUrlDocument,
    "\n  query SearchCustomers($search: String!) {\n    searchCustomers(search: $search) {\n      totalCount\n      results {\n        cellPhone\n        email\n        firstName\n        id\n        isActive\n        lastName\n        profileImage\n        password\n        stripeCustomerId\n        totalFollowers\n        totalFollowings\n      }\n    }\n  }\n": types.SearchCustomersDocument,
    "\n  query GetChatToken {\n    getChatToken\n  }\n": types.GetChatTokenDocument,
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
export function graphql(source: "\n  query getCustomerData {\n    getCustomerData {\n      cellPhone\n      email\n      firstName\n      totalFollowers\n      totalFollowings\n      id\n      isActive\n      lastName\n      profileImage\n      password\n      stripeCustomerId\n      followers {\n        id\n      }\n      following {\n        id\n      }\n      posts {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomerData {\n    getCustomerData {\n      cellPhone\n      email\n      firstName\n      totalFollowers\n      totalFollowings\n      id\n      isActive\n      lastName\n      profileImage\n      password\n      stripeCustomerId\n      followers {\n        id\n      }\n      following {\n        id\n      }\n      posts {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      profileImage\n      socialProvider {\n        createdDate\n        id\n        provider\n        socialId\n      }\n      stripeCustomerId\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      cellPhone\n      email\n      firstName\n      id\n      isActive\n      lastName\n      profileImage\n      socialProvider {\n        createdDate\n        id\n        provider\n        socialId\n      }\n      stripeCustomerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getChannelById($input: String!) {\n    getChannelById(input: $input) {\n      backgroundImage\n      image\n      price\n      about\n      id\n      isPaid\n      rules\n      status\n      totalMembers\n      title\n      posts {\n        id\n        createdDate\n        body\n        images\n        customer {\n          id\n          firstName\n          lastName\n          email\n          profileImage\n        }\n        comments {\n          content\n          id\n          user {\n            firstName\n            lastName\n            id\n            email\n            profileImage\n          }\n        }\n\n        likeCount\n        likes {\n          id\n          user {\n            firstName\n            lastName\n            id\n            email\n            profileImage\n          }\n        } \n      }\n      members {\n        id\n        customer {\n          id\n          firstName\n          lastName\n          email\n          profileImage\n        }\n        paidStatus\n        roleChannel\n      }\n      moderator {\n        firstName\n        lastName\n        id\n        email\n        profileImage\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getChannelById($input: String!) {\n    getChannelById(input: $input) {\n      backgroundImage\n      image\n      price\n      about\n      id\n      isPaid\n      rules\n      status\n      totalMembers\n      title\n      posts {\n        id\n        createdDate\n        body\n        images\n        customer {\n          id\n          firstName\n          lastName\n          email\n          profileImage\n        }\n        comments {\n          content\n          id\n          user {\n            firstName\n            lastName\n            id\n            email\n            profileImage\n          }\n        }\n\n        likeCount\n        likes {\n          id\n          user {\n            firstName\n            lastName\n            id\n            email\n            profileImage\n          }\n        } \n      }\n      members {\n        id\n        customer {\n          id\n          firstName\n          lastName\n          email\n          profileImage\n        }\n        paidStatus\n        roleChannel\n      }\n      moderator {\n        firstName\n        lastName\n        id\n        email\n        profileImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getAllChannelsWithPagination($input: ListChannelsInput!) {\n    getChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        backgroundImage\n        image\n        price\n        rules\n        status\n        title\n        about\n        isPaid\n        members {\n          id\n          paidStatus\n          roleChannel\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getAllChannelsWithPagination($input: ListChannelsInput!) {\n    getChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        backgroundImage\n        image\n        price\n        rules\n        status\n        title\n        about\n        isPaid\n        members {\n          id\n          paidStatus\n          roleChannel\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation JoinChannel($channelId: String!) {\n    joinChannel(channelId: $channelId) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation JoinChannel($channelId: String!) {\n    joinChannel(channelId: $channelId) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation updateChannel($input: UpdateChannelInput!) {\n    updateChannel(input: $input) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation updateChannel($input: UpdateChannelInput!) {\n    updateChannel(input: $input) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOtherCustomerData($input: String!) {\n    getOtherCustomerData(customerId: $input) {\n      isFollowing\n      user {\n        id\n        email\n        firstName\n        lastName\n        profileImage\n        totalFollowers\n        totalFollowings\n        createdDate\n        posts {\n          id\n          body\n          images\n          channel {\n            id\n            title\n          }\n          comments {\n            content\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n          likeCount\n          likes {\n            id\n            user {\n              id\n              email\n              firstName\n              lastName\n              profileImage\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOtherCustomerData($input: String!) {\n    getOtherCustomerData(customerId: $input) {\n      isFollowing\n      user {\n        id\n        email\n        firstName\n        lastName\n        profileImage\n        totalFollowers\n        totalFollowings\n        createdDate\n        posts {\n          id\n          body\n          images\n          channel {\n            id\n            title\n          }\n          comments {\n            content\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n          likeCount\n          likes {\n            id\n            user {\n              id\n              email\n              firstName\n              lastName\n              profileImage\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation createPost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation likePost($input: CreateLikeInput!) {\n    likePost(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation likePost($input: CreateLikeInput!) {\n    likePost(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation unlikePost($input: UpdateLikeInput!) {\n    unlikePost(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation unlikePost($input: UpdateLikeInput!) {\n    unlikePost(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserAllFeeds($input: ListChannelsInput!) {\n    getChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        title\n        status\n        about\n        posts {\n          id\n          body\n          images\n          createdDate\n          channel {\n            id\n            title\n          }\n          comments {\n            content\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n          customer {\n            firstName\n            lastName\n            email\n            id\n            profileImage\n          }\n          likeCount\n          likes {\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserAllFeeds($input: ListChannelsInput!) {\n    getChannels(input: $input) {\n      limit\n      offset\n      totalRows\n      results {\n        id\n        title\n        status\n        about\n        posts {\n          id\n          body\n          images\n          createdDate\n          channel {\n            id\n            title\n          }\n          comments {\n            content\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n          customer {\n            firstName\n            lastName\n            email\n            id\n            profileImage\n          }\n          likeCount\n          likes {\n            id\n            user {\n              firstName\n              lastName\n              id\n              email\n              profileImage\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation FollowCustomer($customerId: String!) {\n    followCustomer(customerId: $customerId) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation FollowCustomer($customerId: String!) {\n    followCustomer(customerId: $customerId) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnfollowCustomer($customerId: String!) {\n    unfollowCustomer(customerId: $customerId) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation UnfollowCustomer($customerId: String!) {\n    unfollowCustomer(customerId: $customerId) {\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostUploadUrls($input: Float!) {\n    getPostUploadUrls(count: $input) {\n      fileName\n      signedUrl\n    }\n  }\n"): (typeof documents)["\n  query getPostUploadUrls($input: Float!) {\n    getPostUploadUrls(count: $input) {\n      fileName\n      signedUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerSignedURL {\n    getCustomerUploadUrl {\n      fileName\n      signedUrl\n    }\n  }\n"): (typeof documents)["\n  query getCustomerSignedURL {\n    getCustomerUploadUrl {\n      fileName\n      signedUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchCustomers($search: String!) {\n    searchCustomers(search: $search) {\n      totalCount\n      results {\n        cellPhone\n        email\n        firstName\n        id\n        isActive\n        lastName\n        profileImage\n        password\n        stripeCustomerId\n        totalFollowers\n        totalFollowings\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchCustomers($search: String!) {\n    searchCustomers(search: $search) {\n      totalCount\n      results {\n        cellPhone\n        email\n        firstName\n        id\n        isActive\n        lastName\n        profileImage\n        password\n        stripeCustomerId\n        totalFollowers\n        totalFollowings\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChatToken {\n    getChatToken\n  }\n"): (typeof documents)["\n  query GetChatToken {\n    getChatToken\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
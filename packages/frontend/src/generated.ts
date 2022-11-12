import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CartItem = {
  __typename?: 'CartItem';
  itemCount?: Maybe<Scalars['Int']>;
  itemID?: Maybe<Scalars['ID']>;
};

export type CartItemInput = {
  itemCount?: InputMaybe<Scalars['Int']>;
  itemID?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddAdmin?: Maybe<User>;
  AddProductItem?: Maybe<Product>;
  Purchase?: Maybe<PurchaseItem>;
  SearchProductName?: Maybe<Array<Maybe<Product>>>;
  SignIn?: Maybe<SignIn>;
  SignUp?: Maybe<User>;
};


export type MutationAddAdminArgs = {
  userID: Scalars['ID'];
};


export type MutationAddProductItemArgs = {
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
};


export type MutationPurchaseArgs = {
  cartitems: Array<InputMaybe<CartItemInput>>;
  date: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationSearchProductNameArgs = {
  name: Scalars['String'];
};


export type MutationSignInArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSignUpArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type PurchaseItem = {
  __typename?: 'PurchaseItem';
  cartitems?: Maybe<Array<Maybe<CartItem>>>;
  date?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllProducts?: Maybe<Array<Maybe<Product>>>;
  GetProductWithID?: Maybe<Product>;
  GetProfile?: Maybe<User>;
  GetUserHistory?: Maybe<Array<Maybe<PurchaseItem>>>;
  GetUserInfo?: Maybe<User>;
};


export type QueryGetProductWithIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserHistoryArgs = {
  userID: Scalars['ID'];
};


export type QueryGetUserInfoArgs = {
  userID: Scalars['ID'];
};

export type SignIn = {
  __typename?: 'SignIn';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  isadmin?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ProductFragment = { __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null };

export type UserFragment = { __typename?: 'User', username?: string | null };

export type AddProductItemMutationVariables = Exact<{
  name: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
}>;


export type AddProductItemMutation = { __typename?: 'Mutation', AddProductItem?: { __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null } | null };

export type PurchaseMutationVariables = Exact<{
  userId: Scalars['ID'];
  date: Scalars['String'];
  cartitems: Array<InputMaybe<CartItemInput>> | InputMaybe<CartItemInput>;
}>;


export type PurchaseMutation = { __typename?: 'Mutation', Purchase?: { __typename?: 'PurchaseItem', date?: string | null, cartitems?: Array<{ __typename?: 'CartItem', itemID?: string | null, itemCount?: number | null } | null> | null } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', SignIn?: { __typename?: 'SignIn', token?: string | null, user?: { __typename?: 'User', username?: string | null } | null } | null };

export type SearchProductNameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type SearchProductNameMutation = { __typename?: 'Mutation', SearchProductName?: Array<{ __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null, id?: string | null } | null> | null };

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', SignUp?: { __typename?: 'User', username?: string | null } | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', GetAllProducts?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, image?: string | null, price?: number | null } | null> | null };

export type GetProductWithIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductWithIdQuery = { __typename?: 'Query', GetProductWithID?: { __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null, id?: string | null } | null };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', GetProfile?: { __typename?: 'User', id?: string | null, username?: string | null } | null };

export type GetUserHistoryQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetUserHistoryQuery = { __typename?: 'Query', GetUserHistory?: Array<{ __typename?: 'PurchaseItem', date?: string | null, cartitems?: Array<{ __typename?: 'CartItem', itemCount?: number | null, itemID?: string | null } | null> | null } | null> | null };

export type GetUserInfoQueryVariables = Exact<{
  userID: Scalars['ID'];
}>;


export type GetUserInfoQuery = { __typename?: 'Query', GetUserInfo?: { __typename?: 'User', isadmin?: boolean | null } | null };

export const ProductFragmentDoc = gql`
    fragment Product on Product {
  name
  image
  price
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  username
}
    `;
export const AddProductItemDocument = gql`
    mutation AddProductItem($name: String!, $image: String!, $price: Int!) {
  AddProductItem(name: $name, image: $image, price: $price) {
    name
    image
    price
  }
}
    `;
export type AddProductItemMutationFn = Apollo.MutationFunction<AddProductItemMutation, AddProductItemMutationVariables>;

/**
 * __useAddProductItemMutation__
 *
 * To run a mutation, you first call `useAddProductItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductItemMutation, { data, loading, error }] = useAddProductItemMutation({
 *   variables: {
 *      name: // value for 'name'
 *      image: // value for 'image'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useAddProductItemMutation(baseOptions?: Apollo.MutationHookOptions<AddProductItemMutation, AddProductItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductItemMutation, AddProductItemMutationVariables>(AddProductItemDocument, options);
      }
export type AddProductItemMutationHookResult = ReturnType<typeof useAddProductItemMutation>;
export type AddProductItemMutationResult = Apollo.MutationResult<AddProductItemMutation>;
export type AddProductItemMutationOptions = Apollo.BaseMutationOptions<AddProductItemMutation, AddProductItemMutationVariables>;
export const PurchaseDocument = gql`
    mutation Purchase($userId: ID!, $date: String!, $cartitems: [CartItemInput]!) {
  Purchase(userID: $userId, date: $date, cartitems: $cartitems) {
    date
    cartitems {
      itemID
      itemCount
    }
  }
}
    `;
export type PurchaseMutationFn = Apollo.MutationFunction<PurchaseMutation, PurchaseMutationVariables>;

/**
 * __usePurchaseMutation__
 *
 * To run a mutation, you first call `usePurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseMutation, { data, loading, error }] = usePurchaseMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      date: // value for 'date'
 *      cartitems: // value for 'cartitems'
 *   },
 * });
 */
export function usePurchaseMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseMutation, PurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PurchaseMutation, PurchaseMutationVariables>(PurchaseDocument, options);
      }
export type PurchaseMutationHookResult = ReturnType<typeof usePurchaseMutation>;
export type PurchaseMutationResult = Apollo.MutationResult<PurchaseMutation>;
export type PurchaseMutationOptions = Apollo.BaseMutationOptions<PurchaseMutation, PurchaseMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  SignIn(username: $username, password: $password) {
    token
    user {
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SearchProductNameDocument = gql`
    mutation SearchProductName($name: String!) {
  SearchProductName(name: $name) {
    name
    image
    price
    id
  }
}
    `;
export type SearchProductNameMutationFn = Apollo.MutationFunction<SearchProductNameMutation, SearchProductNameMutationVariables>;

/**
 * __useSearchProductNameMutation__
 *
 * To run a mutation, you first call `useSearchProductNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchProductNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchProductNameMutation, { data, loading, error }] = useSearchProductNameMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchProductNameMutation(baseOptions?: Apollo.MutationHookOptions<SearchProductNameMutation, SearchProductNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SearchProductNameMutation, SearchProductNameMutationVariables>(SearchProductNameDocument, options);
      }
export type SearchProductNameMutationHookResult = ReturnType<typeof useSearchProductNameMutation>;
export type SearchProductNameMutationResult = Apollo.MutationResult<SearchProductNameMutation>;
export type SearchProductNameMutationOptions = Apollo.BaseMutationOptions<SearchProductNameMutation, SearchProductNameMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $password: String!) {
  SignUp(username: $username, password: $password) {
    username
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  GetAllProducts {
    id
    name
    image
    price
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetProductWithIdDocument = gql`
    query GetProductWithID($id: ID!) {
  GetProductWithID(id: $id) {
    name
    image
    price
    id
  }
}
    `;

/**
 * __useGetProductWithIdQuery__
 *
 * To run a query within a React component, call `useGetProductWithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductWithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductWithIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductWithIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductWithIdQuery, GetProductWithIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductWithIdQuery, GetProductWithIdQueryVariables>(GetProductWithIdDocument, options);
      }
export function useGetProductWithIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductWithIdQuery, GetProductWithIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductWithIdQuery, GetProductWithIdQueryVariables>(GetProductWithIdDocument, options);
        }
export type GetProductWithIdQueryHookResult = ReturnType<typeof useGetProductWithIdQuery>;
export type GetProductWithIdLazyQueryHookResult = ReturnType<typeof useGetProductWithIdLazyQuery>;
export type GetProductWithIdQueryResult = Apollo.QueryResult<GetProductWithIdQuery, GetProductWithIdQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile {
  GetProfile {
    id
    username
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetUserHistoryDocument = gql`
    query GetUserHistory($userId: ID!) {
  GetUserHistory(userID: $userId) {
    date
    cartitems {
      itemCount
      itemID
    }
  }
}
    `;

/**
 * __useGetUserHistoryQuery__
 *
 * To run a query within a React component, call `useGetUserHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserHistoryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetUserHistoryQuery, GetUserHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserHistoryQuery, GetUserHistoryQueryVariables>(GetUserHistoryDocument, options);
      }
export function useGetUserHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserHistoryQuery, GetUserHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserHistoryQuery, GetUserHistoryQueryVariables>(GetUserHistoryDocument, options);
        }
export type GetUserHistoryQueryHookResult = ReturnType<typeof useGetUserHistoryQuery>;
export type GetUserHistoryLazyQueryHookResult = ReturnType<typeof useGetUserHistoryLazyQuery>;
export type GetUserHistoryQueryResult = Apollo.QueryResult<GetUserHistoryQuery, GetUserHistoryQueryVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo($userID: ID!) {
  GetUserInfo(userID: $userID) {
    isadmin
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
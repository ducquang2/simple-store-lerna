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

export type Cart = {
  __typename?: 'Cart';
  itemCount?: Maybe<Scalars['Int']>;
  itemID?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddAdmin?: Maybe<User>;
  AddProductItem?: Maybe<Product>;
  AddToCart?: Maybe<Array<Maybe<Cart>>>;
  RemoveFromCart?: Maybe<Cart>;
  SearchProductName?: Maybe<Array<Maybe<Product>>>;
  SignIn?: Maybe<SignIn>;
  SignUp?: Maybe<User>;
  UpdateItemCountFromCart?: Maybe<Cart>;
};


export type MutationAddAdminArgs = {
  username: Scalars['String'];
};


export type MutationAddProductItemArgs = {
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
};


export type MutationAddToCartArgs = {
  itemCount: Scalars['Int'];
  itemID: Scalars['ID'];
  username: Scalars['String'];
};


export type MutationRemoveFromCartArgs = {
  itemID: Scalars['ID'];
  username: Scalars['String'];
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


export type MutationUpdateItemCountFromCartArgs = {
  itemCount: Scalars['Int'];
  itemID: Scalars['ID'];
  username: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllProducts?: Maybe<Array<Maybe<Product>>>;
  GetCart?: Maybe<Array<Maybe<Cart>>>;
  GetProductWithID?: Maybe<Product>;
  GetProfile?: Maybe<User>;
  GetUserInfo?: Maybe<User>;
};


export type QueryGetCartArgs = {
  username: Scalars['String'];
};


export type QueryGetProductWithIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserInfoArgs = {
  username: Scalars['String'];
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

export type CartFragment = { __typename?: 'Cart', username?: string | null, itemID?: string | null, itemCount?: number | null };

export type ProductFragment = { __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null };

export type UserFragment = { __typename?: 'User', username?: string | null };

export type AddProductItemMutationVariables = Exact<{
  name: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
}>;


export type AddProductItemMutation = { __typename?: 'Mutation', AddProductItem?: { __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null } | null };

export type AddToCartMutationVariables = Exact<{
  username: Scalars['String'];
  itemID: Scalars['ID'];
  itemCount: Scalars['Int'];
}>;


export type AddToCartMutation = { __typename?: 'Mutation', AddToCart?: Array<{ __typename?: 'Cart', username?: string | null, itemID?: string | null, itemCount?: number | null } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', SignIn?: { __typename?: 'SignIn', token?: string | null, user?: { __typename?: 'User', username?: string | null } | null } | null };

export type RemoveFromCartMutationVariables = Exact<{
  username: Scalars['String'];
  itemId: Scalars['ID'];
}>;


export type RemoveFromCartMutation = { __typename?: 'Mutation', RemoveFromCart?: { __typename?: 'Cart', username?: string | null, itemID?: string | null, itemCount?: number | null } | null };

export type SearchProductNameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type SearchProductNameMutation = { __typename?: 'Mutation', SearchProductName?: Array<{ __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null, id?: string | null } | null> | null };

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', SignUp?: { __typename?: 'User', username?: string | null } | null };

export type UpdateItemCountFromCartMutationVariables = Exact<{
  username: Scalars['String'];
  itemId: Scalars['ID'];
  itemCount: Scalars['Int'];
}>;


export type UpdateItemCountFromCartMutation = { __typename?: 'Mutation', UpdateItemCountFromCart?: { __typename?: 'Cart', username?: string | null, itemID?: string | null, itemCount?: number | null } | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', GetAllProducts?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, image?: string | null, price?: number | null } | null> | null };

export type GetCartQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetCartQuery = { __typename?: 'Query', GetCart?: Array<{ __typename?: 'Cart', username?: string | null, itemID?: string | null, itemCount?: number | null } | null> | null };

export type GetProductWithIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductWithIdQuery = { __typename?: 'Query', GetProductWithID?: { __typename?: 'Product', name?: string | null, image?: string | null, price?: number | null, id?: string | null } | null };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', GetProfile?: { __typename?: 'User', id?: string | null, username?: string | null } | null };

export type GetUserInfoQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserInfoQuery = { __typename?: 'Query', GetUserInfo?: { __typename?: 'User', isadmin?: boolean | null } | null };

export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  username
  itemID
  itemCount
}
    `;
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
export const AddToCartDocument = gql`
    mutation AddToCart($username: String!, $itemID: ID!, $itemCount: Int!) {
  AddToCart(username: $username, itemID: $itemID, itemCount: $itemCount) {
    username
    itemID
    itemCount
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      username: // value for 'username'
 *      itemID: // value for 'itemID'
 *      itemCount: // value for 'itemCount'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
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
export const RemoveFromCartDocument = gql`
    mutation RemoveFromCart($username: String!, $itemId: ID!) {
  RemoveFromCart(username: $username, itemID: $itemId) {
    username
    itemID
    itemCount
  }
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      username: // value for 'username'
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, options);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
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
export const UpdateItemCountFromCartDocument = gql`
    mutation UpdateItemCountFromCart($username: String!, $itemId: ID!, $itemCount: Int!) {
  UpdateItemCountFromCart(
    username: $username
    itemID: $itemId
    itemCount: $itemCount
  ) {
    username
    itemID
    itemCount
  }
}
    `;
export type UpdateItemCountFromCartMutationFn = Apollo.MutationFunction<UpdateItemCountFromCartMutation, UpdateItemCountFromCartMutationVariables>;

/**
 * __useUpdateItemCountFromCartMutation__
 *
 * To run a mutation, you first call `useUpdateItemCountFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemCountFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemCountFromCartMutation, { data, loading, error }] = useUpdateItemCountFromCartMutation({
 *   variables: {
 *      username: // value for 'username'
 *      itemId: // value for 'itemId'
 *      itemCount: // value for 'itemCount'
 *   },
 * });
 */
export function useUpdateItemCountFromCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemCountFromCartMutation, UpdateItemCountFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemCountFromCartMutation, UpdateItemCountFromCartMutationVariables>(UpdateItemCountFromCartDocument, options);
      }
export type UpdateItemCountFromCartMutationHookResult = ReturnType<typeof useUpdateItemCountFromCartMutation>;
export type UpdateItemCountFromCartMutationResult = Apollo.MutationResult<UpdateItemCountFromCartMutation>;
export type UpdateItemCountFromCartMutationOptions = Apollo.BaseMutationOptions<UpdateItemCountFromCartMutation, UpdateItemCountFromCartMutationVariables>;
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
export const GetCartDocument = gql`
    query GetCart($username: String!) {
  GetCart(username: $username) {
    username
    itemID
    itemCount
  }
}
    `;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetCartQuery(baseOptions: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartQueryResult = Apollo.QueryResult<GetCartQuery, GetCartQueryVariables>;
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
export const GetUserInfoDocument = gql`
    query GetUserInfo($username: String!) {
  GetUserInfo(username: $username) {
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
 *      username: // value for 'username'
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
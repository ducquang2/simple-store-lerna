const typeDefs = `#graphql
  type User {
    id: ID
    username: String
    password: String
    isadmin: Boolean
  }

  type SignIn {
    token: String
    user: User
  }

  type Product {
    id: ID
    name: String
    image: String
    price: Int
  }

  type Cart {
    username: String
    itemID: ID
    itemCount: Int
  }

  type Query {
    GetProfile: User
    GetAllProducts: [Product]
    GetCart(username: String!): [Cart]
    GetProductWithID(id: ID!): Product
    GetUserInfo(username: String!): User
  }
  
  type Mutation {
    SignIn(username: String!, password: String!): SignIn 
    SignUp(username: String!, password: String!): User
    SearchProductName(name: String!): [Product]
    AddToCart(username: String!, itemID: ID!, itemCount: Int!): [Cart]
    UpdateItemCountFromCart(username: String!, itemID: ID!, itemCount: Int!): Cart
    RemoveFromCart(username: String!, itemID: ID!): Cart
    AddAdmin(username: String!): User
    AddProductItem(name: String!, image: String!, price: Int!): Product
  }
`

export default typeDefs

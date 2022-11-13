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

  type CartItem {
    itemID: ID
    itemCount: Int
  }

  input CartItemInput {
    itemID: ID
    itemCount: Int
  }

  type PurchaseItem {
    date: String
    cartitems: [CartItem]
  }

  type Query {
    GetProfile: User
    GetAllProducts: [Product]
    GetProductWithID(id: ID!): Product
    GetUserInfo(userID: ID!): User
    GetUserHistory(userID: ID!): [PurchaseItem]
  }
  
  type Mutation {
    SignIn(username: String!, password: String!): SignIn 
    SignUp(username: String!, password: String!): User
    SearchProductName(name: String!): [Product]
    AddAdmin(userID: ID!): User
    AddProductItem(name: String!, image: String!, price: Int!): Product
    Purchase(userID: ID!, date: String!, cartitems: [CartItemInput]!): PurchaseItem
  }
`

export default typeDefs

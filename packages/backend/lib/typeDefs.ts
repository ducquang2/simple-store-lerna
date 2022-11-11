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

  type History {
    userID: ID
    date: String
    cartitems: [CartItem]
  }

  type Query {
    GetProfile: User
    GetAllProducts: [Product]
    GetProductWithID(id: ID!): Product
    GetUserInfo(userID: ID!): User
  }
  
  type Mutation {
    SignIn(username: String!, password: String!): SignIn 
    SignUp(username: String!, password: String!): User
    SearchProductName(name: String!): [Product]
    AddAdmin(userID: ID!): User
    AddProductItem(name: String!, image: String!, price: Int!): Product
    Purchase(userID: ID!, date: String, itemID: ID!, itemCount: Int): History
  }
`

export default typeDefs

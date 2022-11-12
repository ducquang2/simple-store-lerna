// @ts-nocheck
import { v4 } from "uuid"
import jwt from "jsonwebtoken"
import { User } from "./types"

export function resolversFn(db) {
  return {
    Query: {
      GetProfile: async (parent, args, context, info) => {
        // console.log(context)

        if (!context.user) throw Error("UnAuthorization")

        return context.user
      },
      GetAllProducts: async () => {
        return db.getData("/products")
      },
      GetProductWithID: async (parent, args, context, info) => {
        const carts = await db.getData("/products")

        const exist = carts.find((x) => x.id === args.id)

        if (exist) {
          return exist
        } else {
          return null
        }
      },
      GetUserInfo: async (parent, args, context, info) => {
        const users = await db.getData("/users")

        const exist = users.find((x) => x.id === args.userID)

        if (exist) {
          return exist
        } else {
          return null
        }
      },
      GetUserHistory: async (parent, args, context, info) => {
        const allhistory = await db.getData("/history")

        const exist = allhistory.find((x) => x.userID === args.userID)

        if (exist) {
          return exist.purchased
        } else {
          return []
        }
      },
    },
    Mutation: {
      SignIn: async (parent, args, context, info) => {
        const users: Array<User> = await db.getData("/users")

        const exist = users.find((x) =>
          x.username.toLowerCase() === args.username.toLowerCase()
            ? x.password === args.password
            : ""
        )
        if (exist) {
          const token = jwt.sign({ userid: exist.id }, "key")
          return {
            token,
            user: exist,
          }
        } else {
          throw Error("username or password is invalid")
        }
      },
      SignUp: async (parent, args, context, info) => {
        const users = await db.getData("/users")

        const exist = users.find(
          (x) => x.username.toLowerCase() === args.username.toLowerCase()
        )
        if (!exist) {
          await db.push("/users", [
            ...users,
            { ...args, id: v4(), isadmin: false },
          ])
          return args
        } else {
          throw Error("User exist")
        }
      },
      SearchProductName: async (parent, args, context, info) => {
        const products = await db.getData("/products")

        const exist = products.filter((x) =>
          x.name.toLowerCase().includes(args.name.toLowerCase())
        )

        if (exist) {
          return exist
        } else {
          return []
        }
      },
      AddAdmin: async (parent, args, context, info) => {
        const users = await db.getData("/users")

        const exist = users.find(
          (x) => x.username.toLowerCase() === args.username.toLowerCase()
        )

        if (exist) {
          users.find((x) =>
            x.username.toLowerCase() === args.username.toLowerCase()
              ? (x.isadmin = true)
              : ""
          )
          await db.push("/users", users)
          return exist
        } else {
          throw Error("User not exists")
        }
      },
      AddProductItem: async (parent, args, context, info) => {
        const products = await db.getData("/products")

        const exist = products.find(
          (x) => x.name.toLowerCase() === args.name.toLowerCase()
        )

        if (!exist) {
          await db.push("/products", [...products, { ...args, id: v4() }])
          return args
        } else {
          throw Error("Item exist")
        }
      },
      Purchase: async (parent, args, context, info) => {
        const history = await db.getData("/history")

        const exist = history.find((x) => x.userID === args.userID)

        if (!exist) {
          await db.push("/history", [
            ...history,
            {
              userID: args.userID,
              purchased: [{ date: args.date, cartitems: args.cartitems }],
            },
          ])
          return args
        } else {
          history
            .find((x) => x.userID === args.userID)
            .purchased.push({ date: args.date, cartitems: args.cartitems })

          console.log(history)

          await db.push("/history", [...history])

          return args
        }
      },
    },
  }
}

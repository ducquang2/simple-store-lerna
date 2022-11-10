// @ts-nocheck
import { v4 } from 'uuid'
import jwt from 'jsonwebtoken'
import { User } from './types'

export function resolversFn(db) {
  return {
    Query: {
      GetProfile: async (parent, args, context, info) => {
        console.log(context)

        if (!context.user) throw Error('UnAuthorization')

        return context.user
      },
      GetAllProducts: async () => {
        return db.getData('/products')
      },
      GetCart: async (parent, args, context, info) => {
        const carts = await db.getData('/carts')

        const exist = carts.filter(
          (x) => x.username.toLowerCase() === args.username.toLowerCase()
        )

        if (exist) {
          return exist
        } else {
          return []
        }
      },
      GetProductWithID: async (parent, args, context, info) => {
        const carts = await db.getData('/products')

        const exist = carts.find((x) => x.id === args.id)

        if (exist) {
          return exist
        } else {
          return null
        }
      },
      GetUserInfo: async (parent, args, context, info) => {
        const users = await db.getData('/users')

        const exist = users.find(
          (x) => x.username.toLowerCase() === args.username.toLowerCase()
        )

        if (exist) {
          return exist
        } else {
          return null
        }
      },
    },
    Mutation: {
      SignIn: async (parent, args, context, info) => {
        const users: Array<User> = await db.getData('/users')

        const exist = users.find((x) =>
          x.username.toLowerCase() === args.username.toLowerCase()
            ? x.password === args.password
            : ''
        )
        if (exist) {
          const token = jwt.sign({ userid: exist.id }, 'key')
          return {
            token,
            user: exist,
          }
        } else {
          throw Error('username or password is invalid')
        }
      },
      SignUp: async (parent, args, context, info) => {
        const users = await db.getData('/users')

        const exist = users.find(
          (x) => x.username.toLowerCase() === args.username.toLowerCase()
        )
        if (!exist) {
          await db.push('/users', [
            ...users,
            { ...args, id: v4(), isadmin: false },
          ])
          return args
        } else {
          throw Error('User exist')
        }
      },
      SearchProductName: async (parent, args, context, info) => {
        const products = await db.getData('/products')

        const exist = products.find(
          (x) => x.name.toLowerCase() === args.name.toLowerCase()
        )
        if (exist) {
          return [exist]
        } else {
          return []
        }
      },
      AddToCart: async (parent, args, context, info) => {
        const carts = await db.getData('/carts')

        const exist = carts.find((x) =>
          x.username.toLowerCase() === args.username.toLowerCase()
            ? x.itemID === args.itemID
            : ''
        )
        if (exist) {
          return Error('Cart exist')
        } else {
          await db.push('/carts', [...carts, { ...args }])
          return [args]
        }
      },
      UpdateItemCountFromCart: async (parent, args, context, info) => {
        const carts = await db.getData('/carts')

        const exist = carts.find((x) =>
          x.username.toLowerCase() === args.username.toLowerCase()
            ? x.itemID === args.itemID
            : ''
        )

        if (exist) {
          carts.find((x) =>
            x.username.toLowerCase() === args.username.toLowerCase()
              ? x.itemID === args.itemID
                ? (x.itemCount = args.itemCount)
                : ''
              : ''
          )
          await db.push('/carts', carts)
          return exist
        } else {
          return null
        }
      },
      RemoveFromCart: async (parent, args, context, info) => {
        const carts = await db.getData('/carts')

        const olddata = carts.find((x) =>
          x.username.toLowerCase() === args.username.toLowerCase()
            ? x.itemID === args.itemID
            : ''
        )

        const exist = carts.filter((x) => x !== olddata)

        if (exist) {
          console.log(exist)
          await db.push('/carts', exist)
          return olddata
        } else {
          return null
        }
      },
      AddAdmin: async (parent, args, context, info) => {
        const users = await db.getData('/users')

        const exist = users.find(
          (x) => x.username.toLowerCase() === args.username.toLowerCase()
        )

        if (exist) {
          users.find((x) =>
            x.username.toLowerCase() === args.username.toLowerCase()
              ? (x.isadmin = true)
              : ''
          )
          await db.push('/users', users)
          return exist
        } else {
          throw Error('User not exists')
        }
      },
      AddProductItem: async (parent, args, context, info) => {
        const products = await db.getData('/products')

        const exist = products.find(
          (x) => x.name.toLowerCase() === args.name.toLowerCase()
        )

        if (!exist) {
          await db.push('/products', [...products, { ...args, id: v4() }])
          return args
        } else {
          throw Error('Item exist')
        }
      },
    },
  }
}

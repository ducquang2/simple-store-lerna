import { makeVar, InMemoryCache } from '@apollo/client'

export const cartItemVar = makeVar([])

export const CustomCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemVar()
          },
        },
      },
    },
  },
})

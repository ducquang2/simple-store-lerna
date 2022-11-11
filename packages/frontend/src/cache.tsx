import { makeVar, InMemoryCache } from '@apollo/client'

export const cartItems = makeVar([])

export const CustomCache = new InMemoryCache({
  typePolicies: {
    Cart: {
      keyFields: ['itemID', 'itemCount'],
    },
  },
})

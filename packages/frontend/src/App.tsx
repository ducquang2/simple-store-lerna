import { ApolloClient, ApolloProvider, gql, HttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'
import React from 'react'
import Header from './components/Header'
import LogIn from './components/LogIn'
import Product from './components/ProductList'
import SignUp from './components/SignUp'
import { CustomCache } from './cache'

const link = new HttpLink({
  uri: 'http://localhost:4000/',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})

export const GetCartItems = gql`
  query GetCartItems {
    cartItems @client
  }
`

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: CustomCache,
  resolvers: {
    Cart: {
      isInCart: (item, _args, { cache }) => {
        const { cartItems } = cache.readQuery({ query: GetCartItems })
        return cartItems.includes(item.id)
      },
    },
  },
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/signin" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App

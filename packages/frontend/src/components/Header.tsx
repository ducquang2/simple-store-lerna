import { useApolloClient } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetProfileQuery } from '../generated'
import {AiFillHome} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
//import './style.css';
// import Cart from './Cart'

export default function Header() {
  const { data } = useGetProfileQuery({ fetchPolicy: 'network-only' })

  const client = useApolloClient()

  const [loginState, setLoginState] = useState<null | undefined | string>()

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoginState(data?.GetProfile?.id)
    }
  }, [data])

  return (
    <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-800 mb-3">
      <div>
        <Link to="/">
          <div><AiFillHome className='w-8 h-8 text-white'/></div>
        </Link>
      </div>

      {!loginState ? (
        <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <Link to="/signin">
            <p className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"'>
              Login
            </p>
          </Link>
          <Link to="/signup">
            <p className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"'>
              SignUp
            </p>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            Hello, {data?.GetProfile?.username}
          </p>
          <Link to="/cart">
            <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              <FaShoppingCart/>
            </p>
          </Link>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem('token')
              client.clearStore()
              client.cache.gc()
              setLoginState(null)
              window.location.href = '/'
            }}
          >
            <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              SignOut
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

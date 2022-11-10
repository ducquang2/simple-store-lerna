import React from 'react'
import { useGetCartQuery, useGetProfileQuery } from '../generated'
import CartItem from './CartItem'

export default function Cart() {
  const { data: profileData } = useGetProfileQuery()
  const { data, loading } = useGetCartQuery({
    variables: {
      username: profileData?.GetProfile?.username as string,
    },
  })

  return (
    <div className='container mx-auto'>
      <h2>Your Cart</h2>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 gap-x-6 p-4">
          {(data?.GetCart || []).map((item) => (
            <CartItem id={item?.itemID || ''} itemcount={item?.itemCount || 0} key={item?.itemID} />
          ))}
        </div>
      )}
    </div>
  )
}

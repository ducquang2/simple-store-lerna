import { useQuery } from '@apollo/client'
import React from 'react'
import { GetCartItems } from '../App'
import { Button } from './Button'
import { CartItem } from './CartItem'

export { Cart }

type CartProps = {
  toggleCart: (event: React.MouseEvent<HTMLElement>) => void
}

const Cart = ({ toggleCart }: CartProps) => {
  const { data, loading, error } = useQuery(GetCartItems)

  if (loading) return <p>loading cart</p>
  if (error) return <p>error: ${error.message}</p>

  return (
    <div className="fixed w-full h-full bg-slate-700 z-30 top-0 left-0">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
        <h3>My Cart</h3>
        <Button onClick={toggleCart}>
          <p>X</p>
        </Button>
        {data && data.cartItems.length === 0 ? (
          <p>No items</p>
        ) : (
          // <ul>
          //   {data &&
          //     data.cartItems.map((item: any) => (
          //       <li key={item.itemID}>
          //         {item.itemID} & {item.itemCount}
          //       </li>
          //     ))}
          // </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 gap-x-6 p-4">
            {(data?.cartItems || []).map((item: any) => (
              <CartItem
                itemID={item?.itemID || ''}
                itemCount={item?.itemCount || 0}
                key={item?.itemID}
              />
            ))}
            <Button>Checkout</Button>
          </div>
        )}
      </div>
    </div>
  )
}

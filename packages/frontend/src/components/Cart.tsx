import { useApolloClient, useQuery } from '@apollo/client'
import React from 'react'
import { GetCartItems } from '../App'
import { cartItemVar } from '../cache'
import { useGetProfileQuery, usePurchaseMutation } from '../generated'
import { Button } from './Button'
import { CartItem } from './CartItem'

export { Cart }

type CartProps = {
  toggleCart: (event: React.MouseEvent<HTMLElement>) => void
}

const Cart = ({ toggleCart }: CartProps) => {
  const { data: userData } = useGetProfileQuery()
  const { data: cartData, loading, error } = useQuery(GetCartItems)

  const [purchase, { data }] = usePurchaseMutation()

  const onHandleCheckOut = () => {
    purchase({
      variables: {
        userId: userData?.GetProfile?.id as string,
        date: 'ngay',
        cartitems: cartData.cartItems,
      },
    })
    cartItemVar([])
  }

  if (loading) return <p>loading cart</p>
  if (error) return <p>error: ${error.message}</p>

  return (
    <div className="fixed w-full z-30 top-0 left-0 md:inset-0 md:h-full overflow-y-auto">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ml-auto ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className='text-xl font-semibold text-white dark:text-white"'>My Cart</h3>
            {cartData && cartData.cartItems.length === 0 ? (
              ''
            ) : (
              <Button buttonClass="ml-auto" onClick={onHandleCheckOut}>
                Checkout
              </Button>
            )}
            <Button
              onClick={toggleCart}
              buttonClass="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <p>X</p>
            </Button>
          </div>
          {cartData && cartData.cartItems.length === 0 ? (
            <p>No items</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 gap-x-6 p-4">
              {(cartData?.cartItems || []).map((item: any) => (
                <CartItem
                  itemID={item?.itemID || ''}
                  itemCount={item?.itemCount || 0}
                  key={item?.itemID}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

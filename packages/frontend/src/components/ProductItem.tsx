import { useReactiveVar } from '@apollo/client'
import { useState } from 'react'
import { cartItemVar } from '../cache'
import { useGetProfileQuery } from '../generated'
import { Button } from './Button'

type cartItemType = {
  itemID: string
  itemCount: number
}

export default function ProductItem(product: { name: any; id: any; image: any; price: any }) {
  const { data } = useGetProfileQuery()
  const [itemCount, setItemCount] = useState(0)

  const cartItems: cartItemType[] = useReactiveVar(cartItemVar)

  const onHandleAddToCart = (id: string) => {
    if (!data?.GetProfile?.id) {
      throw Error('User must logged in')
    } else {
      if (itemCount > 0) {
        let exist = cartItems.find((item) => item.itemID === id)
        cartItemVar(
          !exist ? [...cartItems, { itemID: product.id, itemCount: itemCount }] : cartItems
        )
      }
    }
  }

  return (
    <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 shadow-slate-700"
      key={product?.id}
    >
      <a href="#">
        <img className="rounded-t-lg" src={product?.image ? product.image : ''} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product?.price}</p>
        <div className="relative flex flex-wrap items-center justify-between gap-1">
          <Button
            buttonClass="py-2 px-3"
            onClick={() => {
              if (itemCount <= 0) {
                window.alert("Item count can't less than 0")
                setItemCount(0)
              } else {
                setItemCount(itemCount - 1)
              }
            }}
          >
            -
          </Button>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-10"
            required
            type={'number'}
            value={itemCount}
            min={0}
            onChange={(e) => {
              if (e.target.valueAsNumber < 0) {
                window.alert("Item count can't less than 0")
              }
              setItemCount(e.target.valueAsNumber)
            }}
          ></input>
          <Button onClick={() => setItemCount(itemCount + 1)} buttonClass="py-2 px-3">
            +
          </Button>
          <Button
            onClick={() => onHandleAddToCart(product.id)}
            buttonClass="flex flex-col lg:flex-row list-none lg:ml-auto py-2 px-3 text-sm font-medium text-center ml-auto"
          >
            Add to cart
          </Button>
        </div>
        {/* {error && <span className="text-red-500">{error.message}</span>} */}
      </div>
    </div>
  )
}

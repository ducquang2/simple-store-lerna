import { useReactiveVar } from '@apollo/client'
import React, { useState } from 'react'
import { cartItemVar } from '../cache'
import { useGetProductWithIdQuery } from '../generated'
import { Button } from './Button'

export { CartItem }

type CartItemProps = {
  itemID?: string
  itemCount?: number
}

function CartItem({ itemID, itemCount }: CartItemProps) {
  const [cartChange, setCartChange] = useState(itemCount)

  const { data, loading, error } = useGetProductWithIdQuery({
    variables: {
      id: itemID as string,
    },
    skip: !itemID,
  })

  const cartItems = useReactiveVar(cartItemVar)

  const onHandleRemoveItem = () => {
    cartItemVar(cartItems.filter((item) => item.itemID !== itemID))
  }

  const onHandleChangeItem = () => {
    let test = cartItems.filter((item) => item.itemID !== itemID)

    // let a = (cartItems.find((item) => item.itemID === itemID).itemCount = cartChange.count)
    // cartItemVar([...cartItems.filter((item) => item.itemID !== itemID), a])
    cartItemVar([...test, { itemID: itemID, itemCount: cartChange.count }])

    console.log(cartItems)
  }

  return (
    <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      key={itemID}
    >
      <a href="#">
        <img
          className="rounded-t-lg"
          src={data?.GetProductWithID?.image ? data?.GetProductWithID.image : ''}
          alt=""
        />
      </a>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data?.GetProductWithID?.name}
            </h5>
          </a>
          <Button
            onClick={onHandleRemoveItem}
            buttonClass="py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-auto"
          >
            X
          </Button>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${data?.GetProductWithID?.price}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">itemCount: {itemCount}</p>
        <div className="relative flex flex-wrap items-center justify-between">
          <Button
            onClick={() => {
              if (cartChange.count <= 0) {
                window.alert("Item count can't less than 0")
                setCartChange(0)
              } else {
                setCartChange(cartChange - 1)
              }
            }}
          >
            -
          </Button>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-10"
            type={'number'}
            value={cartChange}
            min={0}
            onChange={(e) => {
              if (e.target.valueAsNumber < 0) {
                window.alert("Item count can't less than 0")
              }
              setCartChange(e.target.valueAsNumber)
            }}
          ></input>
          <Button onClick={() => setCartChange(cartChange + 1)}>+</Button>
          <Button onClick={onHandleChangeItem}>Changed</Button>

          {/* <Button>Changed</Button> */}
        </div>
      </div>
    </div>
  )
}

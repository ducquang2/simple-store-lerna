import React, { useState } from 'react'
import {
  CartFragmentDoc,
  useGetProductWithIdQuery,
  useGetProfileQuery,
  useRemoveFromCartMutation,
  useUpdateItemCountFromCartMutation,
} from '../generated'
import { Button } from './Button'

export default function CartItem(cartitem: { id: string; itemcount: number }) {
  const { data: profileData } = useGetProfileQuery()

  const { data } = useGetProductWithIdQuery({
    variables: {
      id: cartitem.id,
    },
  })

  const [itemChanged, setItemChanged] = useState({
    changed: false,
    count: cartitem.itemcount,
  })

  const [removeFromCart] = useRemoveFromCartMutation()

  const [updateItemCount] = useUpdateItemCountFromCartMutation()

  const onHandleRemoveItem = () => {
    removeFromCart({
      variables: {
        username: profileData?.GetProfile?.username as string,
        itemId: cartitem.id,
      },
      update(cache) {
        cache.modify({
          fields: {
            cart(existsItem = [], { readField }) {
              return existsItem.filter((x: any) => cartitem.id !== readField('id', x))
            },
          },
        })
      },
    })
    setItemChanged({ ...itemChanged, changed: true })
  }

  const onHandleChangeItemCount = () => {
    if (!localStorage.getItem('token')) {
      throw Error('User must logged in')
    } else {
      if (itemChanged.count > 0) {
        updateItemCount({
          variables: {
            username: profileData?.GetProfile?.username as string,
            itemId: cartitem.id,
            itemCount: itemChanged.count,
          },
          update(cache, { data: updateData }) {
            cache.modify({
              fields: {
                cart(existsItem = [], { readField }) {
                  const updatedCart = cache.writeFragment({
                    data: updateData,
                    fragment: CartFragmentDoc,
                  })
                  return [
                    existsItem.filter((x: any) => cartitem.id !== readField('id', x)),
                    updatedCart,
                  ]
                },
              },
            })
          },
        })
        setItemChanged({ ...itemChanged, changed: true })
      }
    }
  }

  React.useEffect(() => {
    if (itemChanged.changed) {
      setTimeout(() => {
        setItemChanged({ ...itemChanged, changed: false })
        window.location.href = '/cart'
      }, 1200)
    }
  }, [itemChanged.changed])

  return (
    <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      key={cartitem.id}
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
          <button
            onClick={onHandleRemoveItem}
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-auto"
          >
            X
          </button>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data?.GetProductWithID?.price},000d
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          itemCount: {cartitem.itemcount}
        </p>
        <div className="relative flex flex-wrap items-center justify-between">
          <Button
            onClick={() => {
              if (itemChanged.count <= 0) {
                window.alert("Item count can't less than 0")
                setItemChanged({ ...itemChanged, count: 0 })
              } else {
                setItemChanged({ ...itemChanged, count: itemChanged.count - 1 })
              }
            }}
            buttonText="-"
          />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-10"
            type={'number'}
            value={itemChanged.count}
            min={0}
            onChange={(e) => {
              if (e.target.valueAsNumber < 0) {
                window.alert("Item count can't less than 0")
              }
              setItemChanged({ ...itemChanged, count: e.target.valueAsNumber })
            }}
          ></input>
          <Button
            onClick={() => setItemChanged({ ...itemChanged, count: itemChanged.count + 1 })}
            buttonText="+"
          />
          <Button onClick={onHandleChangeItemCount} buttonText="Changed" />
        </div>
      </div>
    </div>
  )
}

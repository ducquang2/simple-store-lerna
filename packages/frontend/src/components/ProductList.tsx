import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  ProductFragmentDoc,
  useAddProductItemMutation,
  useGetAllProductsQuery,
  useGetProfileQuery,
  useGetUserInfoQuery,
  useSearchProductNameMutation,
} from '../generated'
import { Button } from './Button'
import { Input } from './Input'
import ProductItem from './ProductItem'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiAddFill} from 'react-icons/ri'

export default function ProductList() {
  return (
    <div className="m-6">
      <h3>Products</h3>
      <DisplayProduct />
    </div>
  )
}

interface IProductSearchInput {
  name: string
}

interface IProductInput {
  name: string
  image: string
  price: number
}

function DisplayProduct() {
  const { data } = useGetProfileQuery()

  const { data: productData } = useGetAllProductsQuery()

  const [search, { data: searchData }] = useSearchProductNameMutation()

  const [searchResult, setSearchResult] = useState(false)

  const { data: userData } = useGetUserInfoQuery({
    variables: {
      username: data?.GetProfile?.username as string,
    },
    skip: !data?.GetProfile?.username,
  })

  const [newProduct] = useAddProductItemMutation()

  const { register: searchInput, handleSubmit: handleSearchSubmit } = useForm<IProductSearchInput>()

  const { register, handleSubmit } = useForm<IProductInput>()

  const onHandleSearchSubmit: SubmitHandler<IProductSearchInput> = (submitData) => {
    search({
      variables: submitData,
    })
    if (submitData.name === '') {
      setSearchResult(false)
    } else {
      setSearchResult(true)
    }
  }

  const onHandleAddSubmit: SubmitHandler<IProductInput> = (productData) => {
    newProduct({
      variables: productData,
      update(cache, { data: newproduct }) {
        //console.log(cache.extract())
        cache.modify({
          fields: {
            users(existsProduct = []) {
              const newProduct = cache.writeFragment({
                data: newproduct,
                fragment: ProductFragmentDoc,
              })
              return [...existsProduct, newProduct]
            },
          },
        })
      },
    })
  }

  return (
    <div className="mt-6">
      <form
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearchSubmit(onHandleSearchSubmit)
          }
        }}
        onSubmit={handleSearchSubmit(onHandleSearchSubmit)}
      >
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Product Name
        </label>
        <div className='flex flex-row gap-1 justify-center'>
          <Input
            className='block '
            inputPlaceholder="Search"
            {...searchInput('name')}
          />
          <Button>
          <AiOutlineSearch/>
          </Button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl:grid-cols-4 gap-y-10 gap-x-6 p-4">
        {searchResult
          ? (searchData?.SearchProductName || []).map((searchProduct) => (
              <ProductItem
                id={searchProduct?.id}
                name={searchProduct?.name}
                image={searchProduct?.image}
                price={searchProduct?.price}
                key={searchProduct?.id}
              />
            ))
          : (productData?.GetAllProducts || []).map((product) => (
              <ProductItem
                id={product?.id}
                name={product?.name}
                image={product?.image}
                price={product?.price}
                key={product?.id}
              />
            ))}
        {userData?.GetUserInfo?.isadmin ? (
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <form
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(onHandleAddSubmit)
                }
              }}
              onSubmit={handleSubmit(onHandleAddSubmit)}
            >
              <Input
                containerClass="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 gap-y-3 gap-x-2 justify-items-center"
                label="Product name"
                {...register('name')}
              />
              <Input
                containerClass="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 gap-y-3 gap-x-2 justify-items-center"
                label="Product image"
                {...register('image')}
              />
              <Input
                containerClass="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 gap-y-3 gap-x-2 justify-items-center"
                label="Product price"
                {...register('price', { valueAsNumber: true })}
              />
              <Button buttonClass="ml-auto">Add Item</Button>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

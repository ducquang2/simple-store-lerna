import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoginMutation } from '../generated'
import { Button } from './Button'
import { Input } from './Input'
import { IFormInput } from './SignUp'

export default function LogIn() {
  const [login, { data, loading, error }] = useLoginMutation()

  const { register, handleSubmit } = useForm<IFormInput>()

  const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    login({
      variables: data,
    })
  }

  React.useEffect(() => {
    if (error) {
      return
    }
    if (data) {
      localStorage.setItem('token', data.SignIn?.token as string)
      window.location.href = '/'
    }
  }, [data, error])

  return (
    <div className="gap-6 m-6">
      <h3>LogIn</h3>
      {error && <span>{error.message}</span>}
      <form
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(onHandleSubmit)
          }
        }}
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <Input label="Username" {...register('username', { required: true })} />
        <Input label="Password" {...register('password', { required: true })} />
        <Button>
          <p>Login</p>
        </Button>
      </form>
    </div>
  )
}

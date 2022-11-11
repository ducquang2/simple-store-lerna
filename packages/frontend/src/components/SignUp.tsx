import { useSignUpMutation } from '../generated'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from './Input'
import { Button } from './Button'

export interface IFormInput {
  username: string
  password: string
}

export default function SignUp() {
  const [signup, { data, loading, error }] = useSignUpMutation()

  const { register, handleSubmit } = useForm<IFormInput>()

  const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!loading) {
      signup({
        variables: data,
      })
    }
  }

  return (
    <div className="gap-6 m-6">
      <h3>SignUp</h3>
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
          <p>Create Account</p>
        </Button>
      </form>
    </div>
  )
}

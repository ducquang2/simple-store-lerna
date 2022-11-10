import React from 'react'

export { Button }

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  buttonClass?: string
}

const Button = React.forwardRef(({ children, buttonClass, ...rest }: ButtonProps, ref: any) => {
  return (
    <button
      ref={ref}
      {...rest}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${buttonClass}`}
      type="submit"
    >
      {children}
    </button>
  )
})

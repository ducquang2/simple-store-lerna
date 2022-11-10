import React from 'react'

export { Input }

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  label?: string
  containerClass?: string
  inputClass?: string
  inputPlaceholder?: string
}

const Input = React.forwardRef(
  ({ label, inputClass, inputPlaceholder, containerClass, ...rest }: InputProps, ref: any) => {
    return (
      <div className='w-full ${containerClass}'>
        {!!label && (
          <label className="block mt-2 text-base font-medium text-gray-900 dark:text-gray-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          {...rest}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClass}`}
          placeholder={`${inputPlaceholder || ''}`}
        />
      </div>
    )
  }
)

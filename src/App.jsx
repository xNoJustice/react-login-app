import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function App() {
  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(4).max(20).required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex w-full h-2/3 xl:w-3/4 lg:w-11/12">
      <div className="hidden bg-[url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')] w-full bg-cover rounded-l-lg lg:block lg:w-5/12"></div>
      <div className="w-full p-5 bg-white lg:w-5/12 dark:bg-gray-700 lg:rounded-l-none">
        <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
          Create an Account!
        </h3>
        <form
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded dark:bg-gray-800"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className={`${errors.fullName ? 'border-red-500' : ''} w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-black focus:outline-none focus:shadow-outline`}
                type="text"
                placeholder="First Name"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-xs italic text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className={`${errors.lastName ? 'border-red-500' : ''} w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-black focus:outline-none focus:shadow-outline`}
                type="text"
                placeholder="Last Name"
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-xs italic text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`${errors.email ? 'border-red-500' : ''} w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-black focus:outline-none focus:shadow-outline`}
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-xs italic text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`${errors.password ? 'border-red-500' : ''} w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-black focus:outline-none focus:shadow-outline`}
                type="password"
                placeholder="******************"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-xs italic text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="c_password"
              >
                Confirm Password
              </label>
              <input
                className={`${errors.confirmPassword ? 'border-red-500' : ''} w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-black focus:outline-none focus:shadow-outline`}
                type="password"
                placeholder="******************"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="text-xs italic text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-6 text-center">
            <input
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
              type="submit"
              value="Register Account"
            />
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-300 align-baseline dark:text-blue-300 hover:text-blue-500"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-300 align-baseline dark:text-blue-300 hover:text-blue-500"
              href="#"
            >
              Already have an account? Login!
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

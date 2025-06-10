import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex h-screen justify-center items-center '>
      <div className=" relative shadow-md p-6 border-0.5 rounded-md dark:bg-gray-800 dark:text-white">
        <div className="w-80">

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}

            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 ">✕</Link>

            <h3 className="font-bold text-xl mb-6">Signup!</h3>

            <div className='mb-4 space-y-2'>
              <span className="">Name</span>
              <br />
              <input type="text" placeholder="Enter your Name" className="outline-none bg-yellow-50  w-full rounded max-w-xs pl-4 p-2  hover:bg-yellow-200 mb-2"
                {...register("name", { required: true })}

              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <br />
            <div className='mt-4 space-y-2'>
              <span className="">Email</span>
              <br />
              <input type="email" placeholder="Enter your Email" className="outline-none bg-yellow-50  w-full rounded max-w-xs pl-4 p-2  hover:bg-yellow-200 mb-2"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <br />
            <div className='mb-2 space-y-2'>
              <span className="">PassWord</span>
              <br />
              <input type="password" placeholder="Enter your Password" className="outline-none bg-yellow-50  w-full rounded max-w-xs pl-4 p-2  hover:bg-yellow-200 mb-6 "
                {...register("password", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

          <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>

          </form>




        </div>
      </div>
    </div>
  )
}

export default Signup

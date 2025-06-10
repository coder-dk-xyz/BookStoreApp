import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box  w-92 dark:bg-gray-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-xl mb-6 ">Login!</h3>
                        

                        <div className="mt-4 space-y-2">
                            <span className="">Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your Email "
                                className="w-80 px-3 py-1 border rounded-md outline-none border-none
                                hover:bg-gray-200
                                 dark:hover:bg-gray-900 "
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
                        <div className="mt-4 space-y-2">
                            <span className="">Pasword</span>
                            <br />
                            <input type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none border-none 
                                dark:hover:bg-gray-900 hover:bg-gray-200"
                                {...register("password", { required: true })}
                            />
                            <br />
                            
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="flex justify-around mt-6">
                            <button className="bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>


                </div>
            </dialog>
        </div>
    )
}

export default Login

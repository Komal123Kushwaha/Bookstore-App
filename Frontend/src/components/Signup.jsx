import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  return (
    <>
    <div className="flex md:flex h-screen items-center justify-center ">
    <div className="w-full max-w-md md:w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/*close button*/}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    
     {/*Name*/}
  <div className="mt-3 space-y-2">
    <span>Name</span>
    <br />
    <input type="name" 
    placeholder="Enter your name" 
    className="w-80 px-3 py-1 border rounded-md outline-none"
    {...register("name", { required: true })} 
    />
  <br />
     {/* errors will return when field validation fails  */}
     {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
    </div>
  <br />

  {/*Email*/}
  <div className="mt-3 space-y-2">
    <span>Email</span>
    <br />
    <input type="email" 
    placeholder="Enter your email" 
    className="w-80 px-3 py-1 border rounded-md outline-none"
    {...register("email", { required: true })} 
    />
    <br />
     {/* errors will return when field validation fails  */}
     {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
    </div>
  <br /> 

  {/*Password*/}
  <div className="mt-3 space-y-2">
    <span>Password</span>
    <br />
    <input type="password" 
    placeholder="Create your password" 
    className="w-80 px-3 py-1 border rounded-md outline-none"
    {...register("password", { required: true })} 
    />
   <br />
     {/* errors will return when field validation fails  */}
     {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
  </div>

  {/*Button*/}
  <div className="flex justify-around mt-4">
    <button className="bg-pink-500 text-white text-md rounded-md px-3 py-2 hover:bg-pink-700">Signup</button>
    <p className="text-xl">Have account? {" "}
        <button className="underline text-blue-500 cursor-pointer"
     onClick={()=>document.getElementById("my_modal_3").showModal()}>
    Login
    </button>
    <Login />
    
    </p>
  </div>
  </form>
  </div>
</div>
        </div>
        </>
  )
}

export default Signup
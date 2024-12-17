import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{
    const userInfo={
     
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:4001/user/login",userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success(' Login Successful');
      document.getElementById("my_modal_3").close()
     window.location.reload();  //to reload page
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user));

   }).catch((err)=>{
    if(err.response){
    console.log(err)
    toast.error("Error:"+err.response.data.message);
  }
   })
  
  };
  
  return (
   <>
   <div>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<div  onClick={()=>document.getElementById('my_modal_3').showModal()}></div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* Close button */}
      <button
                type="button"
                className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2 bg-white text-black"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
              
    {/* Form Title */}
    <h3 className="font-bold text-black text-lg">Login</h3>
    {/*Email Input*/}
  <div className="mt-3 text-black space-y-2">
    <span>Email</span>
    <br />
    <input type="email" 
    placeholder="Enter your email" 
    className="w-80 text-black px-3 py-1 border rounded-md outline-none"
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
  {/*Password Input*/}
  <div className="mt-3 text-black space-y-2">
    <span>Password</span>
    <br />
    <input type="password" 
    placeholder="Enter your password" 
    className="w-80 text-black px-3 py-1 border rounded-md outline-none"
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
   {/* Login Button and Signup Link */}
  <div className="flex justify-around mt-4">
    <button 
    type="submit"
    className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700"
    >
      Login
      </button>
    <p className="text-sm text-black">
      Not Registered? {" "}
        <Link to="/signup" 
        
        className="underline text-blue-500 cursor-pointer"
        
        >
          
    Signup
    </Link>
    </p>
  </div>
  </form>
  </div>
</dialog>
</div>
</>
  )
}

export default Login
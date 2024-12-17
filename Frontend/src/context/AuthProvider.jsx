import React, { createContext, useState,useContext } from 'react'

export const AuthContext=createContext();
function AuthProvider({children}) {
  //Drag data from local storage to component
  const initialAuthUser=localStorage.getItem("Users");
  //manage state
  const[authUser,setAuthUser]=useState(
    initialAuthUser? JSON.parse(initialAuthUser):undefined

  );
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth=()=>useContext(AuthContext);
//go to main.jsx
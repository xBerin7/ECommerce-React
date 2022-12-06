import React,{useState} from 'react'
import AuthContext from './AuthContext'
import{useNavigate} from 'react-router-dom'

function AuthProvider(props){
    const navigate = useNavigate()
    const [userLogin,setUserLogin]=useState(localStorage.getItem("login") || false)
    const loginUser =(userInfo)=>{
        setUserLogin(true)
        localStorage.setItem("login",true)

    }
    const logOutUser=()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
        navigate(`/`)
    }
    return (
        <AuthContext.Provider value={{userLogin,loginUser,logOutUser}}>
            {props.children}
            </AuthContext.Provider>
    )
}

export default AuthProvider
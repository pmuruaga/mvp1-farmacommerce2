import React, {useState} from "react";
import AuthContext from "./AuthContext";
import {useNavigate} from "react-router-dom";

function AuthProvider(props){
    const [userLogin, setUserLogin] = useState(localStorage.getItem("login") || false);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || {});
    const navigate = useNavigate();
    const loginUser = (userInfo) => { 
        console.log("Usuario Logueado en el Context");
        setUserLogin(true);
        setUserInfo(userInfo);        
        localStorage.setItem("login", true);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    const logoutUser = () => {
        console.log("Usuario Deslogueado en el Context");
        setUserLogin(false);
        localStorage.removeItem("login"); //Elimina la variable del storage
        navigate("/");
    }
    return (
        <AuthContext.Provider
            value={{
                userLogin,
                userInfo,
                loginUser,
                logoutUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
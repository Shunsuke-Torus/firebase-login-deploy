import React, { useEffect ,useState} from "react";
import {Auth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
export interface IAuthRouteProps{
    children?: React.ReactNode
}

const AuthRoute:React.FunctionComponent<IAuthRouteProps> = (props) =>{
    const { children} = props;
    console.log(children);
    console.log(props);
    
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

    const AuthCheck = onAuthStateChanged(auth,(user) =>{
        if (user){
            setLoading(false);
            navigate('/');
        }else {
            navigate('/login');
            window.location.reload();
        }
    })

    useEffect(() =>{
        AuthCheck();
    },[AuthCheck]);

    if(loading) return <p>loading...</p>

    return(
        <div>{children}</div>
    )
}

export default AuthRoute;
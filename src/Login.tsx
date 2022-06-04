import { async } from "@firebase/util";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider} from "./firebase";
import Button from '@mui/material/Button';

export interface ILoginPageProps{}

const LoginPage:React.FunctionComponent<ILoginPageProps> = (props) =>{
    const navigate = useNavigate();
    const [authing,setAuthing] = useState(false);

    const signInWithGoogle = async () =>{
        setAuthing(true);
        
        signInWithPopup(auth,provider)
            .then(response =>{
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) =>{
                console.log(error);
                alert("error");
                setAuthing(false);
            })
    }
    return (
        <div id="firebaseui-auth-container">
            <p>Login Page</p>
            <Button variant="contained" onClick={() => signInWithGoogle()} disabled = {authing}>
                Sign in Google
            </Button>
        </div>
    );
};

export default LoginPage;
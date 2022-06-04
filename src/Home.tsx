import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Button from '@mui/material/Button';

export interface IHomePageProps{}

const HomePage:React.FunctionComponent<IHomePageProps> = (props) =>{   
    return (
        <div>
            <p>Home Page by firebase</p>
            <p>{auth.currentUser?.email}</p>
            <p><img src ={auth.currentUser?.photoURL as string} alt="" /></p>
            <p>{auth.currentUser?.displayName}</p>
            <Button variant="contained" onClick={() => signOut(auth)}>Sign out of Firebase</Button>
        </div>
    );
};

export default HomePage;
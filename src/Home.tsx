import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export interface IHomePageProps{}

const HomePage:React.FunctionComponent<IHomePageProps> = (props) =>{   
    return (
        <div>
            <p>Home Page (Protected by firebase!)</p>
            <p>{auth.currentUser?.email}</p>
            <p><img src ={auth.currentUser?.photoURL as string} alt="" /></p>
            <p>{auth.currentUser?.displayName}</p>
            <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
        </div>
    );
};

export default HomePage;
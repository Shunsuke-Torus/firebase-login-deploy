import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const FirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app,auth,provider};
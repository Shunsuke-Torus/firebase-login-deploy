import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import HomePage from "./Home";
import LoginPage from "./Login";

export interface IApplicationProps{}

const Application:React.FunctionComponent<IApplicationProps> = (props) =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {
                                    <AuthRoute>
                                        <HomePage />
                                    </AuthRoute>}/>
                <Route path="/login" element = {<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Application;
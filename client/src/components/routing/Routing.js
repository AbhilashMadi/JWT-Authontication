import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../home/Home";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
};

export default Routing;

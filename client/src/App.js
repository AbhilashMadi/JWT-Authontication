import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routing from "./components/routing/Routing";

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Navbar />
                <div className='main'>
                    <Routing />
                </div>
            </div>
        </Router>
    );
};

export default App;

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouteIndex from './components/routes/RoutesIndex'
import Headers from "./components/layouts/Headers";
import Footers from "./components/layouts/Footers";
import Navbar from "./components/layouts/Navbar";
import OrderModal from "./components/layouts/OrderModal";
import RightSidebar from "./components/layouts/RightSidebar";

function App() {
    return (
        <>
            <BrowserRouter>
                <div id="layout-wrapper">
                    <Headers/>
                    <Navbar/>
                    <div className="main-content">
                        <RouteIndex/>
                        <OrderModal/>
                        <Footers/>
                    </div>
                </div>
                <RightSidebar/>
            </BrowserRouter>
        </>
    );
}

export default App;

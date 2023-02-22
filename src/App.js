import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouteIndex from './components/routes/RoutesIndex'
import Headers from "./components/layouts/Headers";
import Footers from "./components/layouts/Footers";

function App() {
    return (
        <>
            <BrowserRouter>
                <Headers/>
                <RouteIndex/>
                <Footers/>
            </BrowserRouter>
        </>
    );
}

export default App;

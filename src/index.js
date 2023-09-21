import React from "react";
// import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        {/* <RenderAfterNavermapsLoaded> */}
            <App />
        {/* </RenderAfterNavermapsLoaded> */}
    </BrowserRouter>
    );

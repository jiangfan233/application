import React from "react";
import "./global.less";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { GenRouters } from './routes/GenRouters';
import { AdminRoutes, CommonRoutes } from './routes/RouterConfig';
// import App from "./App";
// import Application from "./components/application/Application";
// import ApplicationForm from "./components/application/ApplicationForm";
// import Register from "./components/account/Register";
// import Login from "./components/account/Login";
// import MyApplications from "./components/application/MyApplications";
// import ProcessInfo from "./components/application/ProcessInfo";
// import NotFound from "./components/common/NotFound";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {GenRouters(CommonRoutes)}
        {GenRouters(AdminRoutes)}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

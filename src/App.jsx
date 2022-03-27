import React, { useEffect } from "react";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import Navbar from "./components/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/account/Login";

moment.locale("zh-cn");

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      navigate(location.state.targetPath);
    }
  });

  const role = localStorage.getItem("role");
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="w-full lg:w-3/4  mx-auto shadow-lg shadow-slate-400 ">
        <div className="h-auto mb-1">
          <Navbar />
        </div>
        {role ? <Outlet /> : <Login />}
      </div>
    </div>
  );
};

export default App;

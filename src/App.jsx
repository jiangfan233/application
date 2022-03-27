import React, { useEffect, useState } from "react";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import Navbar from "./components/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/account/Login";
import ColorBar from "./components/ColorBar";

moment.locale("zh-cn");

const App = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [position, setPosition] = useState("absolute buttom-0 left-0");

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      navigate(location.state.targetPath);
    }
  });

  const role = localStorage.getItem("role");
  return (
    <div className={bgColor + " min-h-screen"}>
      <div className="w-full lg:w-3/4  mx-auto shadow-lg shadow-gray-400 ">
        <div className="h-auto mb-1">
          <Navbar />
        </div>
        {role ? <Outlet /> : <Login />}
      </div>
      <div className={position}>
        <ColorBar setColor={setBgColor} />
      </div>
    </div>
  );
};

export default App;

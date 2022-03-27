import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../components/account/Login";
import Register from "../components/account/Register";
import Application from "../components/application/Application";
import ApplicationForm from "../components/application/ApplicationForm";
import MyApplications from "../components/application/MyApplications";
import ProcessInfo from "../components/application/ProcessInfo";
import NotFound from "../components/common/NotFound";
import AuthRoute from "../components/common/AuthRoute";
import Admin from "../components/account/Admin";
import { isLogin, isAdmin } from "../utils/common";

// Comp必须大写，react才能识别为组件
const renderComponent = (Comp, props) => {
  return <Comp {...props} />;
};

// 将路由定义为树形结构
export const CommonRoutes = {
  root: "/",
  element: <App />,
  children: [
    {
      root: "login",
      element: <Login />,
    },
    {
      root: "register",
      element: <Register />,
    },
    {
      root: "not-found",
      element: <NotFound />,
    },
    {
      root: "*",
      element: <Navigate to="/not-found" replace />,
    },
    {
      root: "application",
      element: (
        <AuthRoute
          authFn={isLogin}
          TargetComp={Application}
          redirectPath={"/login"}
        />
      ),
      children: [
        {
          root: "newForm",
          element: <ApplicationForm />,
        },
        {
          root: "myForms",
          element: <MyApplications />,
          children: [
            {
              root: ":id",
              element: <ApplicationForm />,
            },
          ],
        },
        {
          root: "processInfo/:id",
          element: <ProcessInfo />,
        },
      ],
    },
  ],
};

export const AdminRoutes = {
  root: "/admin",
  element: (
    <AuthRoute authFn={isAdmin} TargetComp={Admin} redirectPath="/login" />
  ),
};

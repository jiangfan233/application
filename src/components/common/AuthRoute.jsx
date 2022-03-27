import { Navigate } from "react-router-dom";

const AuthRoute = ({ authFn, TargetComp, redirectPath }) => {
  return authFn() ? <TargetComp /> : <Navigate to={redirectPath} />;
};

export default AuthRoute;

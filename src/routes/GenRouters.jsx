import { Route } from "react-router-dom";

// 递归遍历树
export const GenRouters = (routeObj) => {
  return (
    <Route
      key={routeObj.root}
      path={routeObj.root}
      element={routeObj.element}
    >
      {routeObj.children
        ? routeObj.children.map((child) => GenRouters(child))
        : null}
    </Route>
  );
};

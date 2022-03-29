
// 根据userId获取用户部门
export const getDepartmentNameByUserId = (userId) => {
  return userId
} 

// 根据用户ID 获取用户名
export const getUsernameById = (userId) => {
  return userId
}

// 用户是否登录
export const isLogin = () => {
  const role = localStorage.getItem("role")
  return role==="user" ? true : false;
  // return true;
}

export const isAdmin = () => {
  const role = localStorage.getItem("role")
  return role==="admin" ? true : false;
}



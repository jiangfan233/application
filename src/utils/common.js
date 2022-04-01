import { GetApplicationById } from "/fakeData/fakeApplications";
import { GetClassInfoById } from "/fakeData/fakeClassInfo";
import { GetProcessInfoById } from "/fakeData/fakeProcessInfo";

// 根据userId获取用户部门
export const getDepartmentNameByUserId = (userId) => {
  return userId;
};

// 根据用户ID 获取用户名
export const getUsernameById = (userId) => {
  return "USER-" + userId;
};

// 用户是否登录
export const isLogin = () => {
  const role = localStorage.getItem("role");
  return role === "user" ? true : false;
  // return true;
};

export const isAdmin = () => {
  const role = localStorage.getItem("role");
  return role === "admin" ? true : false;
};

export const getProcessInfoByAppId = (appId) => {
  const classId = GetApplicationById(appId).appClassId;
  const processId = GetClassInfoById(classId).processId;
  return GetProcessInfoById(processId);
};

// 获取审批角色名称
export const getRoleNameById = (roleId) => {
  return "roleName-" + roleId;
};

// 格式化日期
export function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}

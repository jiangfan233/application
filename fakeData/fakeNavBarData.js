export const UserNavBarData = [
  {
    type: "menuItem",
    key: "home",
    path: "/",
    label: "首页",
  },
  {
    type: "subMenu",
    key: "submenu",
    title: "事务申请",
    children: [
      {
        key: "newForm",
        path: "/application/newForm",
        label: "新建事务申请",
      },
      {
        key: "myForms",
        path: "/application/myForms",
        label: "我的事务申请",
      },
    ],
  },
  {
    key: "register",
    path: "/register",
    label: "注册",
  },
  {
    key: "login",
    path: "/login",
    label: "登录",
  },
];

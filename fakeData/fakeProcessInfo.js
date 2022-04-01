const ProcessInfos = [
  {
    id: "5DC935EB-D018-6851-46E6-A46D93B41627",
    info: [
      {
        stepId: 0,
        userId: "ID",
        roleId: "applicant",
      },
      {
        stepId: 1,
        userId: "ID",
        roleId: "张三",
      },
      {
        stepId: 2,
        userId: "ID",
        roleId: "李四",
      },
      {
        stepId: 3,
        userId: "ID",
        roleId: "王五",
      },
    ],
  },
  {
    id: "852B1138-5434-E62C-4E89-0080AE2A3092",
    info: [
      {
        stepId: 0,
        userId: "ID",
        roleId: "applicant",
      },
      {
        stepId: 1,
        userId: "ID",
        roleId: "猪八戒",
      },
      {
        stepId: 2,
        userId: "ID",
        roleId: "大师兄",
      },
      {
        stepId: 3,
        userId: "ID",
        roleId: "玉皇大帝",
      },
      {
        stepId: 4,
        userId: "ID",
        roleId: "太上老君",
      },
    ],
  },
  {
    id: "0DB28723-16C2-1793-2B1D-D30000A70023",
    info: [
      {
        stepId: 0,
        userId: "",
        roleId: "applicant",
      },
      {
        stepId: 1,
        userId: "",
        roleId: "申请人",
      },
      {
        stepId: 2,
        userId: "",
        roleId: "部门经理",
      },
      {
        stepId: 3,
        userId: "",
        roleId: "片区会计",
      },
      {
        stepId: 4,
        userId: "",
        roleId: "财务部经理",
      },
      {
        stepId: 5,
        userId: "",
        roleId: "分管总",
      },
      {
        stepId: 6,
        userId: "",
        roleId: "财务出纳",
      },
    ],
  },
];

export function GetProcessInfos() {
  return ProcessInfos;
}

export function GetProcessInfoById(id) {
  return ProcessInfos.find((p) => p.id === id);
}

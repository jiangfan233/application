const ProcessInfos = [
  {
    id: "5DC935EB-D018-6851-46E6-A46D93B41627",
    info: [
      {
        stepId: 1,
        stepType: "user",
        processorId: "",
        processorName: "张三",
      },
      {
        stepId: 2,
        stepType: "user",
        processorId: "",
        processorName: "李四",
      },
      {
        stepId: 3,
        stepType: "user",
        processorId: "",
        processorName: "王五",
      },
    ],
  },
  {
    id: "852B1138-5434-E62C-4E89-0080AE2A3092",
    info: [
      {
        stepId: 1,
        stepType: "user",
        processorId: "",
        processorName: "猪八戒",
      },
      {
        stepId: 2,
        stepType: "user",
        processorId: "",
        processorName: "大师兄",
      },
      {
        stepId: 3,
        stepType: "user",
        processorId: "",
        processorName: "玉皇大帝",
      },
      {
        stepId: 4,
        stepType: "user",
        processorId: "",
        processorName: "太上老君",
      },
    ],
  },
  {
    id: "0DB28723-16C2-1793-2B1D-D30000A70023",
    info: [
      {
        stepId: 1,
        stepType: "user",
        processorId: "",
        processorName: "申请人",
      },
      {
        stepId: 2,
        stepType: "user",
        processorId: "",
        processorName: "部门经理",
      },
      {
        stepId: 3,
        stepType: "user",
        processorId: "",
        processorName: "片区会计",
      },
      {
        stepId: 4,
        stepType: "user",
        processorId: "",
        processorName: "财务部经理",
      },
      {
        stepId: 5,
        stepType: "user",
        processorId: "",
        processorName: "分管总",
      },
      {
        stepId: 6,
        stepType: "user",
        processorId: "",
        processorName: "财务出纳",
      }
    ],
  },
];


export function GetProcessInfos() {
    return ProcessInfos;
}

export function GetProcessInfoById(id) {
  return ProcessInfos.find(p => p.id === id)
}

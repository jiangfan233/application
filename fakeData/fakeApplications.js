// applicantId: 申请人ID
// appClassId: 事务分类ID
// processCurrentId: 当前进行到第几步，从1开始，每完成一步加1
// status: 当前事务状态， 0：流转中（正常）；1：已完成；-1：被驳回
const Applications = [
  {
    id: "CEF2B43C-A267-DDB9-BB46-5EEEE5C17F9F",
    title: "test",
    applicationDate: "2022-03-14",
    applicantId: "lili",
    appClassId: "F3E2B880-2FB5-043F-05DB-C2D77BAAE4E2",
    processCurrentId: 2,
    status: 0,
    appDescription: "This is a test",
    appFields: [],
  },
  {
    id: "8454F4AD-A3B4-B25C-9AE1-371C17520728",
    title: "申请丹药",
    applicationDate: "2022-03-15",
    applicantId: "zhubajie",
    appClassId: "A7E23BA8-56D9-BBCF-67D2-E3C92A600725",
    processCurrentId: 3,
    status: -1,
    appDescription: "借老头丹药尝尝~~",
    appFields: [],
  },
  {
    id: "F0613290-31EB-4BA3-3F64-8CDB55ED2209",
    title: "关于打印机费用报销的申请",
    applicationDate: "2022-03-12",
    applicantId: "zhupeipei",
    appClassId: "F3AA5D04-8202-A7E3-EADF-A85FE053F9B4",
    processCurrentId: 4,
    status: 0,
    appDescription: "xxx机构2020年2月打印机租赁费用500元",
    appFields: [],
  },
];

export function GetApplications() {
  return Applications;
}

export function GetApplicationById(id) {
  return Applications.find((app) => app.id === id);
}

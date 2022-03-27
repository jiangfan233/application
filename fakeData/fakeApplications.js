const Applications = [
    {
        id:"CEF2B43C-A267-DDB9-BB46-5EEEE5C17F9F",
        title: "test",
        date: "2022-03-14",
        applicantId: "lili",
        classId: "F3E2B880-2FB5-043F-05DB-C2D77BAAE4E2",
        processCurrentId: 2,
        status: 0,
        description:"This is a test",
        fileIds: [],
    },
    {
        id:"8454F4AD-A3B4-B25C-9AE1-371C17520728",
        title: "申请丹药",
        date: "2022-03-15",
        applicantId: "zhubajie",
        classId: "A7E23BA8-56D9-BBCF-67D2-E3C92A600725",
        processCurrentId: 3,
        status: -1,
        description: "借老头丹药尝尝~~",
        fileIds: [],
    },
    {
        id:"F0613290-31EB-4BA3-3F64-8CDB55ED2209",
        title: "关于打印机费用报销的申请",
        date: "2022-03-12",
        applicantId: "zhupeipei",
        classId: "F3AA5D04-8202-A7E3-EADF-A85FE053F9B4",
        processCurrentId: 4,
        status: 0,
        description:"xxx机构2020年2月打印机租赁费用500元",
        fileIds: [],
    }
]

export function GetApplications() {
    return Applications;
}

export function GetApplicationById(id)  {
    return Applications.find(app => app.id === id)
}
const ClassInfos = [
  {
    id: "F3E2B880-2FB5-043F-05DB-C2D77BAAE4E2",
    className: "test",
    processId: "5DC935EB-D018-6851-46E6-A46D93B41627",
    desc: "test: 注明金额",
  },
  {
    id: "A7E23BA8-56D9-BBCF-67D2-E3C92A600725",
    className: "讨要丹药",
    processId: "852B1138-5434-E62C-4E89-0080AE2A3092",
    desc: "老头儿，老头儿！",
  },
  {
    id: "F3AA5D04-8202-A7E3-EADF-A85FE053F9B4",
    className: "报销",
    processId: "0DB28723-16C2-1793-2B1D-D30000A70023",
    desc: "注明金额，用途",
  },
];

export function GetClassInfos() {
  return ClassInfos;
}

export function GetClassInfoById(id) {
  return ClassInfos.find((item) => item.id === id);
}

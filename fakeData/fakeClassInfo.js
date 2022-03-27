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
  // {
  //   value: "总公司",
  //   label: "总公司",
  //   children: [
  //     {
  //       value: "财务部",
  //       label: "财务部",
  //       id: "DA6518D7-4225-5971-7573-80139A8698DF",
  //     },
  //     {
  //       value: "运营部",
  //       label: "运营部",
  //       id: "1035846E-6A01-F138-EB0B-A70A4B4D6D89",
  //     },
  //     {
  //       value: "法务部",
  //       label: "法务部",
  //       id: "3F9156ED-222A-992B-5FE0-42BD9D2243F1",
  //     },
  //   ],
  // },
  // {
  //   value: "分公司",
  //   label: "分公司",
  //   children: [
  //     {
  //       value: "分财务部",
  //       label: "分财务部",
  //       id: "D98EBD80-A744-371A-05F6-351848DF8579",
  //     },
  //     {
  //       value: "办公室",
  //       label: "办公室",
  //       id: "2F33E5F8-6E31-FD9B-DCEE-262F93E40713",
  //     },
  //     {
  //       value: "采购部",
  //       label: "采购部",
  //       id: "1E7D8D82-078F-677C-9FA3-5DFB06641536",
  //     },
  //     {
  //       value: "技术部",
  //       label: "技术部",
  //       id: "1967DDB6-ACB4-D431-0C19-380F64E1FECA",
  //     }
  //   ],
  // },
];

export function GetClassInfos() {
  return ClassInfos;
}

export function GetClassInfoById(id) {
  return ClassInfos.find((item) => item.id === id);
}

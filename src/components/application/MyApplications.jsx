import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { GetApplications } from "/fakeData/fakeApplications.js";
import { GetClassInfoById } from "/fakeData/fakeClassInfo.js";
import ProcessInfo from "./ProcessInfo";

const columns = [
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
      <Link to={"/application/myForms/" + record.key}>{text}</Link>
    ),
  },
  {
    title: "事务分类",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "申请时间",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "申请人",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status",
    render: (text, record) => (
      <Link to={"/application/processInfo/" + record.key}>
        {getProcessStatus(text)}
      </Link>
    ),
  },
  // Table.EXPAND_COLUMN,
];

function getProcessStatus(textNumber) {
  if (textNumber === 0) {
    return "流转中";
  } else if (textNumber > 0) {
    return "已完成";
  } else {
    return "被驳回";
  }
}

const MyApplications = () => {
  const params = useParams();

  function getNameById(id) {
    // 这里应该根据用户ID返回姓名
    return id;
  }

  function genrateData(applications) {
    for (let i = 0; i < applications.length; i++) {
      const item = applications[i];
      item.key = item.id;
      item.class = GetClassInfoById(item.appClassId).className;
      item.name = getNameById(item.applicantId);
    }
    return applications;
  }

  function renderPage(params) {
    if (params.id) {
      return <Outlet />;
    } else {
      const applications = GetApplications();
      return (
        <Table
          columns={columns}
          dataSource={genrateData(applications)}
          expandable={{
            expandedRowRender: (record) => (
              <ProcessInfo
                applicationId={record.id}
              />
            ),
            rowExpandable: (record) => record.id,
          }}
        />
      );
    }
  }

  return renderPage(params);
};

export default MyApplications;

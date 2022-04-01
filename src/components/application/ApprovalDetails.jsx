import { Suspense, useEffect, useState } from "react";
import { getProcessInfoByAppId, getUsernameById } from "../../utils/common";
import ListComponent from "../common/ListComponent";
import { GetApplicationById } from "/fakeData/fakeApplications";
import { getRoleNameById } from "../../utils/common";
import { dateFormat } from "./../../utils/common";

const ApprovalDetails = ({ applicationId }) => {
  const [processInfo, setProcessInfo] = useState([]);
  const app = GetApplicationById(applicationId);
  const processCurrentId = app.processCurrentId;

  // 根据 processInfo 的 stepId 和 processCurrentId 生成 审批意见
  // 正常情况下应该是从每个 application 获取数据
  const getApprovalDesc = (statusId, stepId, currentId) => {
    if (stepId < currentId) {
      return "同意";
    } else if (stepId === currentId) {
      return statusId < 0 ? "不同意" : "处理中";
    } else {
      return statusId < 0 ? "停止" : "流转中";
    }
  };

  // 数据整合，整合出 ListComponent 的 data
  const keysMapToView = (itemList, num) => {
    const approvalList = itemList.filter((item) => item.stepId <= num);
    return approvalList.map((item) => {
      const title =
        (getRoleNameById(item.roleId) || "审批人") +
        ": " +
        getUsernameById(item.userId);
      return {
        title: <p className="mx-2">{title}</p>,
        description: (
          <div>
            <p
              className={
                (app.status < 0 && item.stepId === num ? "text-red-500" : "") +
                " indent-6"
              }
            >
              {getApprovalDesc(app.status, item.stepId, num)}
            </p>
            <p className="text-right">{dateFormat("YYYY-mm-dd", new Date())}</p>
          </div>
        ),
      };
    });
  };

  useEffect(() => {
    const processInfoList = getProcessInfoByAppId(applicationId).info;
    setProcessInfo(processInfoList);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {processInfo.length && (
        <ListComponent
          data={keysMapToView(processInfo, processCurrentId)}
          itemLayout="horizontal"
        />
      )}
    </Suspense>
  );
};

export default ApprovalDetails;

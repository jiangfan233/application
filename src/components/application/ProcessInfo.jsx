import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { GetApplicationById } from "../../../fakeData/fakeApplications";
import { GetClassInfoById } from "../../../fakeData/fakeClassInfo";
import { GetProcessInfoById } from "../../../fakeData/fakeProcessInfo";
import StepsComponent from "./../common/StepsComponent";
import { renderButton } from "../common/ButtonComponent";

// 获取当前步骤的描述性信息
// processSatus 对应 application 的 status
// stepId       对应 processInfo 的 stepId
// currentId    对应 application 的 processCurrentId
const getStepDesc = (processStatus, stepId, currentId) => {
  if (stepId < currentId) {
    return "已完成";
  } else if (stepId === currentId) {
    return processStatus < 0 ? "不同意" : "处理中";
  } else {
    return processStatus < 0 ? "停止" : "流转中";
  }
};

// 获取当前步骤的状态，与视图相关
// processSatus 对应 application 的 status
// stepId       对应 processInfo 的 stepId
// currentId    对应 application 的 processCurrentId
const getStepStatus = (processStatus, stepId, currentId) => {
  if (currentId > stepId) {
    return "finish";
  } else if (currentId == stepId) {
    return processStatus < 0 ? "error" : "process";
  } else {
    return "wait";
  }
};

// 生成 StepsComponent 中 itemDescObj 和 itemStatusObj;
const genStepsObj = (processInfoList, processStatus, currentId) => {
  const stepsDescObj = {};
  const stepsStatusObj = {};
  processInfoList.map((item) => {
    stepsStatusObj[item.stepId] = getStepStatus(
      processStatus,
      item.stepId,
      currentId
    );
    stepsDescObj[item.stepId] = getStepDesc(
      processStatus,
      item.stepId,
      currentId
    );
  });
  return { stepsDescObj: stepsDescObj, stepsStatusObj: stepsStatusObj };
};

// applicationId: 事务申请的唯一识别符
const ProcessInfo = ({ applicationId, ...rest }) => {
  const params = useParams();
  const navigate = useNavigate();

  const getProcessInfoByClassId = (classId) => {
    const classInfo = GetClassInfoById(classId);
    return GetProcessInfoById(classInfo.processId).info;
  };

  // id 应为一个 application 的 ID
  const renderPage = (id) => {
    const app = GetApplicationById(id);
    if (!app) {
      return <Navigate to={"/not-found"} replace />;
    } else {
      const processInfo = getProcessInfoByClassId(app.appClassId);
      const stepsObj = genStepsObj(
        processInfo,
        app.status,
        app.processCurrentId
      );
      return (
        <div {...rest}>
          <StepsComponent
            current={app.processCurrentId}
            itemList={processInfo}
            itemKey="stepId"
            itemTitle={"roleId"}
            itemDescObj={stepsObj["stepsDescObj"]}
            itemStatusObj={stepsObj["stepsStatusObj"]}
            direction={params.id ? "vertical" : "horizontal"}
            progressDot={params.id ? false : true}
            type={params.id ? "default" : "navigation"}
            className={
              params.id ? "" : "w-auto flex flex-wrap justify-center my-1"
            }
            // 直接用 {false} 会产生警告
            responsive={1 === 2}
          />
          {params.id &&
            renderButton("goback", "primary", "返回", () => navigate(-1), {
              className: "m-2",
            })}
        </div>
      );
    }
  };

  return renderPage(applicationId ? applicationId : params.id);
};

export default ProcessInfo;

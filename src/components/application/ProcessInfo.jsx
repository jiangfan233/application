import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Steps } from "antd";
import { GetApplicationById } from "../../../fakeData/fakeApplications";
import { GetClassInfoById } from "../../../fakeData/fakeClassInfo";
import { GetProcessInfoById } from "../../../fakeData/fakeProcessInfo";

const { Step } = Steps;

const ProcessInfo = () => {
  const params = useParams();

  const getProcessInfoByClassId = (classId) => {
    const classInfo = GetClassInfoById(classId);
    return GetProcessInfoById(classInfo.processId).info
  }

  const getStepDesc = (processStatus, stepId, currentId) => {
    if (stepId < currentId) {
      return "已完成";
    } else if (stepId === currentId) {
      return processStatus < 0 ? "不同意" : "处理中";
    } else {
      return processStatus < 0 ? "停止" : "流转中";
    }
  }

  const getStepStatus = (processStatus, stepId, currentId) => {
    if (currentId > stepId) {
      return "finish";
    } else if (currentId == stepId) {
      return processStatus < 0 ? "error" : "process";
    } else {
      return "wait";
    }
  }

  const renderPage = (id) => {
    const app = GetApplicationById(id);
    if (!app) {
      return <Navigate to={"/not-found"} replace />;
    } else {
      const processInfo = getProcessInfoByClassId(app.classId);
      return (
        <Steps current={app.processCurrentId} direction="vertical">
          {processInfo.map((sp) => (
            <Step
              style={{}}
              key={sp.stepId}
              title={sp.processorName}
              status={getStepStatus(
                app.status,
                sp.stepId,
                app.processCurrentId
              )}
              description={getStepDesc(
                app.status,
                sp.stepId,
                app.processCurrentId
              )}
            />
          ))}
        </Steps>
      );
    }
  }

  return renderPage(params.id);
};

export default ProcessInfo;

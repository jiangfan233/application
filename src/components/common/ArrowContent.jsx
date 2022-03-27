import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const ArrowContent = ({ children: Component }) => {
  const [hideContent, setHideContent] = useState(true);

  const showContent = () => {
    setHideContent(!hideContent);
  };

  const showArrow = () => {
    const Comp = hideContent ? LeftOutlined : RightOutlined;
    return <Comp className="bg-gray-300  p-3 mr-2 shadow-sm shadow-gray-300" />;
  };

  return (
    <div className="mb-2 flex bg-gray-200 shadow-gray-300 shadow-lg rounded-lg">
      <div className="mt-2" onClick={showContent}>
        {showArrow()}
      </div>
      <div className={hideContent ? "hidden" : "" + " h-auto"}>{Component}</div>
    </div>
  );
};

export default ArrowContent;

import { Suspense } from "react";

// lazy loading
const TooltipComponent = ({ Children, ...rest }) => {
  return (
    <div className="tooltip" {...rest}>
      <span className="tip-icon">&#33;</span>
      <div className="tip-message">
        <Suspense fallback={<div>Loading...</div>}>{Children}</Suspense>
      </div>
    </div>
  );
};

export default TooltipComponent;

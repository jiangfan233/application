import { useState } from "react";

const Admin = () => {
  const [p, setP] = useState({ top: "100px", left: "50px" });
  const [params, setParams] = useState({});

  const handleMouseMove = (e) => {
    const nowX = e.clientX;
    const nowY = e.clientY;
    const disX = nowX - params.currentX;
    const disY = nowY - params.currentY;
    p.top = 50 + disX + "px";
    p.left = 100 + disY + "px";
    setP(p);
  };

  const handleMouseDown = (e) => {
    params.currentX = e.clientX;
    params.currentY = e.clientY;
    setParams(params);
  };

  return (
    <div
      draggable
      style={{ position: "absolute", top: p.top, left: p.left }}
      className="w-10/12 h-10/12  bg-gray-300"
    >
      <h1
        draggable
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => console.log(e)}
      >
        Hello Admin!
      </h1>
    </div>
  );
};

export default Admin;

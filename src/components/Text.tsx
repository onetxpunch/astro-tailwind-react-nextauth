import { useState } from "react";

export default () => {
  const [a, setA] = useState(true);
  return (
    <div
      className="bg-blue-300 p-4 cursor-pointer rounded select-none"
      onClick={() => setA(!a)}
    >
      {a ? "Click again" : "Click"}
    </div>
  );
};

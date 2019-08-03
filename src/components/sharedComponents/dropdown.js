import React, { useState } from "react";

const DropDown = props => {
  const [open, setOpen] = useState(false);

  const openContent = () => {
    setOpen(true);
  };

  const leaveContent = () => {
    setOpen(false);
  };

  const toggleContent = () => {
    setOpen(!open);
  };

  return (
    <div className={props.className}>
      <div
        onMouseOver={openContent}
        onMouseOut={leaveContent}
        onClick={toggleContent}
      >
        {props.children(open)}
      </div>
      {open === true && <div>Content hided</div>}
    </div>
  );
};
export default DropDown;

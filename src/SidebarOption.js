import React from "react";

import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon className="sidebarOption__icon"></Icon>
      <h3 className="sidebarOption__text">{text}</h3>
    </div>
  );
}

export default SidebarOption;

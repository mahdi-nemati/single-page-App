import { useRef, useState } from "react";

const MenuIcon = ({ MenuHandler }) => {

 
  return (
    <div className="menu" onClick={MenuHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuIcon;

import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="linkCon">
      <NavLink
        className={(a) => (a.isActive ? "activeStyle none" : "none")}
        to="/profile/dashboard"
      >
        dashboard
      </NavLink>
      <NavLink
        className={(a) => (a.isActive ? "activeStyle none" : "none")}
        to="/profile/download"
      >
        download
      </NavLink>
    </div>
  );
};

export default SideBar;

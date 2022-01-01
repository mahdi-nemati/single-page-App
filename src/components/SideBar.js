import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="linkCon">
      <Link to="/profile/dashboard">dashboard</Link>
      <Link to="/profile/download">download</Link>
    </div>
  );
};

export default SideBar;

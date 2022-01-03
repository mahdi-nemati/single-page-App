import { NavLink } from "react-router-dom";
import MenuIcon from "./components/MenuIcon";
import { useState } from "react";
const Navigation = () => {
  const [click, setClick] = useState(true);
  const items = [
    { to: "/", name: "خانه" },
    { to: "/about-us", name: "درباره ما" },
    { to: "/profile", name: "نمایه" },
    { to: "/blogs", name: "بلاگ ها" },
    { to: "/post", name: "پست ها" },
  ];
  const MenuHandler = () => {
    setClick(!click);
  };
  return (
    <header>
      <nav>
        <section className={click ? "menuCon openMenu" : " menuCon closeMenu"}>
          <MenuIcon MenuHandler={MenuHandler} />
        </section>
        <ul className={click ? "nav open" : "nav close"}>
          <div></div>
          {items.map((i) => (
            <li key={i.to}>
              <NavLink
                className={(a) => (a.isActive ? "activeStyle  none" : "none")}
                to={i.to}
              >
                {i.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

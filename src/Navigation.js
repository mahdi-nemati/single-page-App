import { NavLink } from "react-router-dom";
const Navigation = (props) => {
  const items = [
    { to: "/", name: "HomePage" },
    { to: "/about-us", name: "AboutPag" },
    { to: "/profile", name: "Profile" },
    { to: "/blogs", name: "Blogs" },
    { to: "/post", name: "Post" },
  ];
  return (
    <header>
      <nav>
        <ul className="nav">
          {items.map((i) => (
            <li key={i.to}>
              <NavLink to={i.to}>{i.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

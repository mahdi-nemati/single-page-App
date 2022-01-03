import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
const items = [
  { to: "/blogs/1", name: "blog -1" },
  { to: "/blogs/2", name: "blog -2" },
  { to: "/blogs/3", name: "blog -3" },
  { to: "/blogs/4", name: "blog -4" },
];

const BlogPage = () => {
  return (
    <Layout>
      <section className="homePage">
        <header className="homePageHeader">
          <h3> بلاگ ها </h3>
        </header>
        <body>
          <ul>
            {items.map((i) => (
              <li key={i.to} className="blogList">
                <Link
                  className="none blogItem"
                  to={{ pathname: i.to, search: "sort=name" }}
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </body>
      </section>
    </Layout>
  );
};

export default BlogPage;

import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
const items = [
  { to: "/blogs/1", name: "blog -1" },
  { to: "/blogs/2", name: "blog -2" },
  { to: "/blogs/3", name: "blog -3" },
  { to: "/blogs/4", name: "Blog -4" },
];

const BlogPage = () => {
  return (
    <Layout>
      <p>این صفحه بلاگ ها است</p>
      {items.map((i) => (
        <li key={i.to}>
          <Link className="none" to={{pathname:i.to , search:"sort=name"}}>
            {i.name}
          </Link>
        </li>
      ))}
    </Layout>
  );
};

export default BlogPage;

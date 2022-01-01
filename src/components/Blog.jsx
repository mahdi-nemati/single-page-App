import Layout from "../Layout/Layout";
import { Link, useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
const Blog = (props) => {
  const query = queryString.parse(useLocation().search);
  console.log(query);

  const NumberId = useParams();
  const id = NumberId.id;
  return (
    <Layout>
      <p>this is a blog - {id}</p>
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to next blog</Link>
    </Layout>
  );
};

export default Blog;

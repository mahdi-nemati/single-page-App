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
      <section className="homePage">
        <header className="homePageHeader">
          <p>بلاگ شماره ی - {id}</p>
        </header>
        <body className="blogPageBody">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط
          </p>
        </body>
        <Link to={`/blogs/${parseInt(id) + 1}`}>بلاگ بعدی</Link>
      </section>
    </Layout>
  );
};

export default Blog;

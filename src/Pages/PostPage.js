import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const NumberId = useParams();
  const id = NumberId.id;
  return (
    <Layout>
      <section className="homePage">
        <header className="homePageHeader">
          <h3> پست ها</h3>
        </header>
        <body >
          <p>هیچ پستی وجود ندارد</p>
        </body>
      </section>
    </Layout>
  );
};

export default PostPage;

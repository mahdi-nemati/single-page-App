import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
const NotFound = () => {
  return (
    <Layout>
      <section className="homePage">
        <header className="homePageHeader">
          <p>
            404
            
          </p>
        </header>
        <body className="notBody">
          <p>صفحه ای که دنبالش بودید پیدا نشد</p>
          <Link to="/">Home</Link>
        </body>
      </section>
    </Layout>
  );
};

export default NotFound;

import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
const NotFound = () => {
  return (
    <Layout>
      <p>
        404
        <br />
        Not Found
      </p>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default NotFound;

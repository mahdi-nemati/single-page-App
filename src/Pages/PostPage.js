import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const NumberId = useParams();
  const id = NumberId.id || 1;
  return (
    <Layout>
      <p>Post - {id}</p>
      <div>{JSON.stringify(NumberId)}</div>
    </Layout>
  );
};

export default PostPage;

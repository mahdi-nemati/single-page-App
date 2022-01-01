import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <Layout>
      <p>این صفحه پروفایل است</p>
      <SideBar />
      <Routes>
        
      </Routes>
    </Layout>
  );
};

export default Profile;

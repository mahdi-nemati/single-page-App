import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import Dashboard from "../components/Dashboard";
import Download from "../components/DownLoad";
const Profile = () => {
  return (
    <Layout>
      <section className="homePage">
        <header className="homePageHeader profile">
          <p>نمایه شما</p>
          <SideBar />
        </header>
      </section>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </Layout>
  );
};

export default Profile;

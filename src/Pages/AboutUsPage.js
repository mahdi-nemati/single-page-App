import Layout from "../Layout/Layout";

const AboutPage = (props) => {
  return (
    <Layout>
      <section className="homePage">
        <header className="homePageHeader">
          <h2> درباره ما </h2>
        </header>
        <body className="AboutPageBody">
          <p>Contact us : </p>
          <p>Mahdi Nemati</p>
          <p>
            Eamil : <span>this.nemati@gmail.com</span>
          </p>
          <p>
            Phone Num : <span>09199866214</span>
          </p>
        </body>
      </section>
    </Layout>
  );
};

export default AboutPage;

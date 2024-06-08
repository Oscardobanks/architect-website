import ProjectLorum from "../components/ProjectLorum";
import About from "../components/About";
import MainFocus from "../components/MainFocus";
import OurProjects from "../components/OurProjects";
import ContactUs from "../components/ContactUs";

const LandingPage = () => {
  return (
    <div className="mx-20">
      <ProjectLorum />
      <About />
      <MainFocus />
      <OurProjects />
      <ContactUs />
    </div>
  );
};

export default LandingPage;

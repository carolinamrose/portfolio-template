import "./styles/App.css";
import DefaultTemplate from "./components/DefaultTemplate";
import BannerSection from "./components/BannerSection/BannerSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import TechSection from "./components/TechSection/TechSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";

const App = () => {

  return (
    <>
    <DefaultTemplate>
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
      </main>
    </DefaultTemplate>
    </>
  )
}

export default App;

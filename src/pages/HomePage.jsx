import logo from "../assets/images/logo-dark.png";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

function HomePage() {
    return (
        <div className="flex flex-col gap-0 w-full font-display">
            <Navbar logo={logo} />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}

export default HomePage;

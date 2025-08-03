import logoDark from "../assets/icons/logo-dark.svg";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

function HomePage() {
    return (
        <div className="flex flex-col gap-0 w-full font-display">
            <Navbar logo={logoDark} />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default HomePage;

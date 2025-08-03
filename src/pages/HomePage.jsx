import logoDark from "../assets/icons/logo-dark.svg";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import RevealOnScroll from "../components/RevealOnScroll";

function HomePage() {
    return (
        <div className="font-display flex w-full flex-col gap-0">
            <RevealOnScroll>
                <Navbar logo={logoDark} />
            </RevealOnScroll>
            <RevealOnScroll>
                <HeroSection />
            </RevealOnScroll>
            <RevealOnScroll>
                <AboutSection />
            </RevealOnScroll>
            <RevealOnScroll>
                <SkillsSection />
            </RevealOnScroll>
            <RevealOnScroll>
                <ProjectsSection />
            </RevealOnScroll>
            <RevealOnScroll>
                <ContactSection />
            </RevealOnScroll>
            <RevealOnScroll>
                <Footer />
            </RevealOnScroll>
        </div>
    );
}

export default HomePage;

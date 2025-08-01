import logo from "../assets/images/logo-dark.png";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <div className="flex flex-col gap-0 w-full font-display">
            <Navbar logo={logo} />
            <HeroSection />
            <AboutSection />
        </div>
    );
}

export default HomePage;

import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <div className="flex flex-col gap-0 w-full">
            <Navbar logo={logo} />
        </div>
    );
}

export default HomePage;

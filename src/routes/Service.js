import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/pexels-fauxels-3183198.jpg"
import Footer from "../components/Footer";
import Testimony from "../components/Testimony";

function Service() {
    return(
        <>
        <Navbar />
        <Hero 
        clName="hero"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Testimony />
        <Footer />
        </>
    )
}

export default Service;
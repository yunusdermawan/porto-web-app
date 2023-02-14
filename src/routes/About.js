import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/group-diverse-people-having-business-meeting.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return(
        <>
        <Navbar />
        <Hero 
        clName="hero"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
    )
}

export default About;
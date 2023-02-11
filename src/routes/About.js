import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/group-diverse-people-having-business-meeting.jpg";

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
        </>
    )
}

export default About;
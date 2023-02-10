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
        title="Grow Better"
        text="We Help You With Your Brand"
        btnText="Business Plan"
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default About;
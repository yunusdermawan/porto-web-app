import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/pexels-fauxels-3183198.jpg"

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
        </>
    )
}

export default Service;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/pexels-ken-tomita-389819.jpg"
import Footer from "../components/Footer";

function Contact() {
    return(
        <>
        <Navbar />
        <Hero 
        clName="hero"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        />
        <Footer />
        </>
    )
}

export default Contact;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/pexels-ken-tomita-389819.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


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
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact;
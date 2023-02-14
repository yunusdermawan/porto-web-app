import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";

function Home() {
    return(
        <>
        <Navbar />
        <Hero 
        clName="hero"
        heroImg="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
        title="Grow Better"
        text="We Help You With Your Brand"
        btnText="Business Plan"
        url="/"
        btnClass="show"
        />
        <Products />
        <Testimony />
        <Footer />
        </>
    )
}

export default Home;
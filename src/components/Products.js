import LogoDesign from "../assets/kelly-sikkema-o2TRWThve_I-unsplash.jpg"
import TeamManagement from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg"
import DataPresentation from "../assets/campaign-creators-pypeCEaJeZY-unsplash.jpg"
import Sales from "../assets/mock-up-animation-annual-data-report-green-blue-background-financial-analysis.jpg"

const Products = () => {
    return (
        <div>
            <h1>Our Products And Services</h1>
            <p>You create the idea, we do the rest.</p>
            <div classname="first-product">
                <div classname="product-text">
                    <h2>Logo Design</h2>
                    <p>Logos serve to represent a given organization or company through a visual image that can be easily understood and recognized. A logo generally involves symbols, stylized text or both. Logos are often created by a graphic artist in consultation with a company and marketing experts.</p>
                </div>
                <div classname="image">
                    <img alt="image" src={LogoDesign} />
                </div>
            </div>
        </div>
    )
}

export default Products;
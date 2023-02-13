import LogoDesign1 from "../assets/hand-holding-notebook-with-drew-brand-logo-creative-design-ideas.jpg"
import LogoDesign2 from "../assets/brad-neathery-mGH253KbfaY-unsplash.jpg"
import TeamManagement1 from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg"
import TeamManagement2 from "../assets/businessmen-businesswomen-meeting-brainstorming-ideas.jpg"
import DataPresentation from "../assets/campaign-creators-pypeCEaJeZY-unsplash.jpg"
import Sales from "../assets/mock-up-animation-annual-data-report-green-blue-background-financial-analysis.jpg"
import "./Products.css";
import ProductData from "./ProductData";

const Products = () => {
    return (
        <div className="products">
            <h1>Our Products And Services</h1>
            <p>You create the idea, we do the rest.</p>

            <ProductData 
            className="first-product"
            heading="Logo Design"
            text="Logos serve to represent a given organization or company through a visual image that can be easily understood and recognized. A logo generally involves symbols, stylized text or both. Logos are often created by a graphic artist in consultation with a company and marketing experts."
            img1={LogoDesign1}
            img2={LogoDesign2}
            />

            <ProductData 
            className="first-product-reverse"
            heading="Team Management"
            text="Team management refers to actions, strategies, or methods that brings a group of people together to work effectively as a team and achieve a common goal. There are many tasks that require multiple people, so teams are an essential building block to productivity. Companies rely on teams and effective team management to maintain its operations."
            img1={TeamManagement1}
            img2={TeamManagement2}
            />

        </div>
    )
}

export default Products;
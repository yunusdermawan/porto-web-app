import LogoDesign1 from "../assets/kelly-sikkema-o2TRWThve_I-unsplash.jpg"
import LogoDesign2 from "../assets/brad-neathery-mGH253KbfaY-unsplash.jpg"
import TeamManagement from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg"
import DataPresentation from "../assets/campaign-creators-pypeCEaJeZY-unsplash.jpg"
import Sales from "../assets/mock-up-animation-annual-data-report-green-blue-background-financial-analysis.jpg"
import "./Products.css";
import { Component } from "react"

class ProductData extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <div className="product-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="image" src={this.props.img1} />
                    <img alt="image" src={this.props.img2} />
                </div>
            </div>
        )
    }
}


export default ProductData;
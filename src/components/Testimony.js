import "./Testimony.css"
import TestimonyData from "./TestimonyData";
import TestimonyImage1 from "../assets/cheerful-businessman.jpg"
import TestimonyImage2 from "../assets/smiling-young-handsome-businessman-holding-laptop-looking-camera-blue-background.jpg"
import TestimonyImage3 from "../assets/confident-young-businessman-suit-standing-with-arms-folded.jpg"

function Testimony() {
    return(
        <div className="testimony">
            <h1>Our Clients</h1>
            <p>What people say about us</p>
            <div className="testimony-card">
                <TestimonyData 
                image={TestimonyImage1}
                heading="Bussan Next Gen 8"
                text="Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!"
                />
                <TestimonyData 
                image={TestimonyImage2}
                heading="Major Plot"
                text="As a sales gamification company, we were skeptical to work with a consultant to optimize our sales emails, but Salesfolk was highly recommended by many other Y-Combinator startups we knew. Salesfolk helped us run a ~6 week email campaign that brought us more leads than we had ever seen for a single effort."
                />
                <TestimonyData 
                image={TestimonyImage3}
                heading="Twist The Gems"
                text="We were looking for an affordable marketing company and Silver Tongue Media more than delivered. They manage our blog and social media accounts and produce our brochures. We saw an immediate increase in our social media presence and our followers doubled in a month and our garage business has increased 50% in two months! They took the time to understand who we are as a company and gave us a few amazing marketing plans to choose from. We wholeheartedly recommend Silver Tongue to everyone know."
                />
            </div>
        </div>
    )
}

export default Testimony;
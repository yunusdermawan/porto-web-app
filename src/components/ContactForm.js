import "./ContactForm.css"


function ContactForm() {
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <button rows="4">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;
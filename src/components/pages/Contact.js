import { Form } from "../contact/Form";
import { Footer } from "../Footer"
import "./Contact.css"

export const Contact = () => {

    return (
      <>
        <div className="container contact-section">
          <div className="row">
            <div className="col-md-6 contact-header">
              <h1>Have a question to ask ?</h1>
              <img src="./images/contact.jpg" />
            </div>
            <div className="col-md-6">
                <Form />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
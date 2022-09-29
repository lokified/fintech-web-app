import "./Form.css"

export const Form = () => {

    return (
      <>
        <div className="container form-section">
          <form>
            <div>
              <input type="text" name="name" placeholder="Enter Names" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Enter Email" />
            </div>
            <div>
              <textarea type="text" name="message" placeholder="Enter Message" />
            </div>

            <button>Send</button>
          </form>
        </div>
      </>
    );
}
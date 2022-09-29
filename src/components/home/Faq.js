import React, { useState } from "react";
import "./Faq.css"

export const Faq = (props) => {
    const [show, setShowAnswer] = useState(false)

    const handleClick = () => setShowAnswer(!show)


    return (
      <>
        <div className="faq-card">
          <p onClick={handleClick}>{props.question}</p>
          <div className="faq-card-desc">
            <p className={ show ? 'desc active': 'desc'}>
              {props.answer}
            </p>
          </div>
        </div>
      </>
    );
}
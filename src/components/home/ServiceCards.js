import { ServiceCard } from "./ServiceCard"
import "./ServiceCards.css"

export const ServiceCards = () => {


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  return (
    <section className="service-section">
      <div className="service-cards">
        <ServiceCard
          actionImage="./images/send.svg"
          action="Send"
          actionMessage="Send and receive money across borders, as well as P2P transfers."
        />
        <ServiceCard
          actionImage="./images/spend.svg"
          action="Spend"
          actionMessage="Make purchases and withdrawals online or in person, anywhere in the world."
        />
        <ServiceCard
          actionImage="./images/save.svg"
          action="Save"
          actionMessage="Save in dollars and earn high yield returns on your balance with no additional fees."
        />
        <ServiceCard
          actionImage="./images/invest.svg"
          action="Invest"
          actionMessage="Set a monthly savings target and start investing."
        />
      </div>
    </section>
  );
}
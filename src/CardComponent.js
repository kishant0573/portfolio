import React, { useEffect } from 'react';
import './Projects.css';
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
function CardComponent() {
  const cards = document.querySelectorAll(".card");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isCardVisible() {
    cards.forEach(card => {
      const isVisible = isElementInViewport(card);
      if (isVisible) {
        card.classList.add("isVisible");
      } else {
        card.classList.remove("isVisible");
      }
    });
  }

  useEffect(() => {
    isCardVisible();

    window.addEventListener("scroll", isCardVisible);
    window.addEventListener("resize", isCardVisible);

    return () => {
      window.removeEventListener("scroll", isCardVisible);
      window.removeEventListener("resize", isCardVisible);
    };
  }, []);

  return (
    <div>
     <div className="wrapper">
     <Tilt options={defaultOptions} >
  <div className="card">
    <img src="https://i.ibb.co/Wc7RLgG/pikachu.png" />
    <h2 className="card-title">Pikachu</h2>
  </div>
  </Tilt>
  <Tilt options={defaultOptions} >
  <div className="card">
    <img src="https://i.ibb.co/TkBFwhX/alakazam.png" />
    <h2 className="card-title">Alakazam</h2>
  </div>
  </Tilt>
  <div className="card">
    <img src="https://i.ibb.co/fXsLm23/arbok.png" />
    <h2 className="card-title">Arbok</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/gwdv5nV/bulbasaur.png" />
    <h2 className="card-title">Bulbasaur</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/ZKqChM6/butterfree.png" />
    <h2 className="card-title">Butterfree</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/89F8Kct/charmander.png" />
    <h2 className="card-title">Charmander</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/b6WPmYn/exeggutor.png" />
    <h2 className="card-title">Exeguttor</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/51SCFG1/voltorb.png" />
    <h2 className="card-title">Voltorb</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/r7j7Tq7/jigglypuff.png" />
    <h2 className="card-title">Jigglypuff</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/mcFQ5jZ/magikarp.png" />
    <h2 className="card-title">Magikarp</h2>
  </div>
  <div className="card">
    <img src="https://i.ibb.co/4VysCs0/meowth.png" />
    <h2 className="card-title">Meowth</h2>
  </div>
</div>

    </div>
  );
}

export default CardComponent
;
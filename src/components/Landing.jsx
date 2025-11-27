import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Australia's most awarded online Library platform</h1>
            <h2>
              Frind your dream book wih <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <buton className="btn">Browse Books</buton>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;

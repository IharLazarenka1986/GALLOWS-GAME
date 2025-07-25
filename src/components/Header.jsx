import React from "react";

const Header = ({ word, guessedLetters, wrongCount }) => {
  return (
    <header>
      <div className="blockGallows">
        
        
        <div className="gameRules">

          <p className="rules">
            {" "}
            <strong>
              Game rules: you need to choose a category in the menu and guess the word from the chosen category. You have three attempts.
            </strong>
          </p>
        </div>
        <img
          className="logoGallows"
          src="/img/klipartz.com (1).png"
          alt="#"
          width={80}
          height={80}
        />
      </div>

      <h1 className="tittle">
        {"GALLOWS".split("").map((char, index) => (
          <span
            key={index}
            className="jump"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </header>
  );
};

export default Header;

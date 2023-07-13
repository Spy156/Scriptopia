import React from "react";
import "../../assets/fa/css/all.css";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="container">
        <div className="left">
          <i
            className="fa-duotone fa-code"
            style={{
              "--fa-primary-color": " #c4fd46",
              "--fa-secondary-color": "#c4fd46",
            }}
          ></i>

          <h2>Welcome to Scriptopia</h2>

          <form action="" method="POST">
            <input type="text" placeholder="Moodle ID" />
            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
            <p className="credit">A Project By Bigg Chungus</p>

            <p id="err">&nbsp;</p>
          </form>
        </div>

        <div className="right">
          <h3>Did You Know?</h3>
          <p>
            the term "bug" in computer programming originated from a literal
            insect? In 1947, while working on the Harvard Mark II computer,
            computer scientist Grace Hopper encountered a malfunction caused by
            a moth that was trapped in a relay. The moth was carefully removed
            and taped to the logbook, along with a note that read "First actual
            case of bug being found." This incident led to the use of the term
            "bug" to describe a flaw or error in a computer program. Today, the
            term "debugging" is commonly used to refer to the process of
            identifying and fixing software issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

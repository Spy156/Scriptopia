import React, { useEffect } from "react";
import "./Code.css";
import "jquery";
import "jquery-ui/dist/jquery-ui";

const Code = () => {
  useEffect(() => {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/one_dark");
    editor.session.setMode("ace/mode/javascript");
    editor.setShowPrintMargin(false);

    $(function () {
      $("#accordion").accordion();
    });
  }, []);

  return (
    <div className="Code">
      <div className="container">
        <div className="nav">
          <div className="left-link">
            <i
              className="fa-duotone fa-code"
              style={{
                "--fa-primary-color": " #c4fd46",
                "--fa-secondary-color": "#c4fd46",
              }}
            ></i>
            <div className="links">
              <a href="/courses">Courses</a>
              <a href="/practice">Practice</a>
            </div>
          </div>

          <input type="text" placeholder="Search Here" />

          <div className="profile"></div>
        </div>

        <div className="main">
          <div className="left">
            <div id="editor"></div>
          </div>
          <div className="right">
            <div id="accordion">
              <div className="button-wrapper">
                <p>Statement</p>
                <div className="buttons">
                  <button className="btn">Run Tests</button>
                  <button className="btn">Submit</button>
                </div>
              </div>

              <div className="prob"></div>
              <p className="output-text">Output Console</p>
              <div className="output"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;

import React, { useEffect, useState } from "react";
import classes from "../modules/Header.module.scss";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import todoIcon from "../assets/images/icon-todo.svg";

const Header = () => {
  const [toggleValues, setToggleValues] = useState(Array(3).fill(false));
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickHandler = (index) => {
    setToggleValues((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      {width < 481 && (
        <div className={classes["burger-navbar"]}>
          <h1>snap</h1>
          <img
            src={menuIcon}
            alt=""
            onClick={() => {
              clickHandler(2);
            }}
          />
        </div>
      )}
      {toggleValues[2] && (
        <div className={classes["burger-menu"]}>
          <img
            src={closeIcon}
            alt=""
            style={{ position: "relative", top: "10px", left: "10px" }}
            onClick={() => {
              clickHandler(2);
            }}
          />
          <div className={classes["text-navSide"]}>
            <div
              onClick={() => {
                clickHandler(0);
              }}
            >
              <p>Features</p>
              {toggleValues[0] ? (
                <img src={arrowUp} alt="" />
              ) : (
                <img src={arrowDown} alt="" />
              )}
            </div>
            <div
              onClick={() => {
                clickHandler(1);
              }}
            >
              <p>Company</p>
              {toggleValues[1] ? (
                <img src={arrowUp} alt="" />
              ) : (
                <img src={arrowDown} alt="" />
              )}
            </div>
            <p>Careers</p>
            <p>About</p>
          </div>
          <div className={classes["btn-side"]}>
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      )}
      {width > 480 && (
        <div className={classes["header-container"]}>
          {toggleValues[1] && (
            <div className={classes["modal-2"]}>
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
          )}
          {toggleValues[0] && (
            <div className={classes["modal-1"]}>
              <div>
                <img src={todoIcon} alt="" />
                <p>Todo List</p>
              </div>
              <div>
                <img src={calendarIcon} alt="" />
                <p>Calendar</p>
              </div>
              <div>
                <img src={reminderIcon} alt="" />
                <p>Reminders</p>
              </div>
              <div>
                <img src={planningIcon} alt="" />
                <p>Planning</p>
              </div>
            </div>
          )}
          <div className={classes["nav-side"]}>
            <h1>snap</h1>
            <div className={classes["text-navSide"]}>
              <div
                onClick={() => {
                  clickHandler(0);
                }}
              >
                <p>Features</p>
                {toggleValues[0] ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrowDown} alt="" />
                )}
              </div>
              <div
                onClick={() => {
                  clickHandler(1);
                }}
              >
                <p>Company</p>
                {toggleValues[1] ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrowDown} alt="" />
                )}
              </div>
              <p>Careers</p>
              <p>About</p>
            </div>
          </div>
          <div className={classes["btn-side"]}>
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

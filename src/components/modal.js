import React from "react";
import "./modal.css";
import CloseIcon from "../assets/closeIcon.svg";
const ModalUI = (props) => {
  return (
    <>
      {props.show ? (
        <div onClick={props.clicked} className="backdrop"></div>
      ) : null}
      <img src={CloseIcon} className="close-icon" onClick={props.clicked} />
      <div
        className="modal"
        style={{
          transform: props.show ? "TranslateY(0)" : "TranslateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default ModalUI;

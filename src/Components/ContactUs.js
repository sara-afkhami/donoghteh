import React, { useState } from "react";

const SocialMedia = () => {
  return (
    <div className="space social-media">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-linkedin"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-pinterest"></a>
      <a href="#" class="fa fa-skype"></a>
      <a href="#" class="fa fa-telegram"></a>
      <a href="#" class="fa fa-whatsapp"></a>
    </div>
  );
};

const ContactUs = (props) => {
  const [stepNumber, setStepNumber] = useState(0);

  const nextStageHandler = () => {
    if (stepNumber < 3) {
      setStepNumber((prev) => prev + 1);
    }
  };

  const previousStageHandler = () => {
    if (stepNumber > 0) {
      setStepNumber((prev) => prev - 1);
    } else if (stepNumber === 1) console.log("hi");
  };

  const First = () => {
    return (
      <div className="intro contact-us">
        <div className="col-md-5 intro-text">
          <h1>
            {props.data ? props.data.title : "Loading"}
          </h1>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.email : "Loading"}</a>
            </p>
          </div>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.phoneNumber : "Loading"}</a>
            </p>
          </div>
          <div className="space c">
            <p className="space">
              <a href="#">{props.data ? props.data.address : "Loading"}</a>
            </p>
          </div>

          <button
            className="space send-massage-button"
            type="button"
            onClick={() => nextStageHandler()}
          >
            <span>Send Your Massage</span>
          </button>
          <SocialMedia/>
        </div>
      </div>
    );
  };

  const Buttons = () => {
    return (
      <div className="btns">
        <div>
        <button type="button" onClick={() => previousStageHandler()}>
          <span>&#10229;</span>
        </button>
        </div>
        <div>
        <button
          className="btn1"
          type="button"
          onClick={() => nextStageHandler()}
        >
          <span>&#10230;</span>
        </button>
        </div>
      </div>
    );
  };

  const formBodyCreator = (stage) => {
    if (stage === 1) {
      return (
        <div>
          <h2>What's Your Massage?</h2>
          <input name="massage" />
          <Buttons />
        </div>
      );
    } else if (stage === 2) {
      return (
        <div>
          <h2>What's Your Email?</h2>
          <input name="email" />
          <Buttons />
        </div>
      );
    } else {
      return (
        <div>
          <h2>What's Your Name?</h2>
          <input name="name" />
          <Buttons />
        </div>
      );
    }
  };

  if (stepNumber === 0) return <First />;
  else {
    return (
      <div lassName="send-massage-body">
        <div className="send-massage-form">
        <form>{formBodyCreator(stepNumber)}</form>
      </div>
      </div>
    );
  }
};
export default ContactUs;

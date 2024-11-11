import { useEffect } from "react";
import "./footer.css";
import video from "../../assets/video2.mp4";

//import icons
import { FiSend } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import axios from "axios";

import Validation from "./EmailValidation";

const Footer = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [values, setValues] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.email === "") {
      axios
        .post("http://localhost:8081/email", values)
        .then((response) => {
          alert(response.data.message || "Email registered successfully");
          window.location.reload();
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.error
          ) {
            alert(error.response.data.error);
          } else {
            alert("An unexpected error occurred");
          }
        });
    }
  };

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Eat with us</h2>
          </div>

          <div className="inputDiv flex">
            <form action="" onSubmit={handleSubmit}>
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Enter Email Address"
                onChange={handleInput}
                name="email"
              />
              <button data-aos="fade-up" className="button flex" type="submit">
                SEND
                <FiSend className="icon" />
              </button>

              {errors.email && <span className="warning">{errors.email}</span>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

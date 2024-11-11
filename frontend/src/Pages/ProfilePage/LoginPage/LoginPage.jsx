import "./LoginPage.css";
import Footer from "../../../Components/Footer/footerEmail";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Validation from "./LoginValidation";
import video from "../../../assets/video2.mp4";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaUtensils } from "react-icons/fa";

//fade
import Aos from "aos";
import "aos/dist/aos.css";

export default function LoginPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.username === "" && err.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((result) => {
          if (result.data.loginStatus) {
            navigate("/HomePage");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="logoDiv">
        <Link to="/HomePage" className="logo flex">
          <h1>
            <FaUtensils className="icon" />
            MakanGak
          </h1>
        </Link>
      </div>
      <div className="loginPage flex" data-aos="fade-right">
        <div className="contain flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
              <h2 className="title"> Solusi Laparmu, Kapanpun & Di Manapun</h2>
              <p>Lapar? Tinggal Klik!</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">Don&apos;t have an account?</span>
              <Link to={"/RegisterPage"}>
                <button className="btn">Register</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <h3>Welcome!</h3>
            </div>

            <form action="" className="form grid" onSubmit={handleSubmit}>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    name="username"
                    onChange={handleInput}
                    placeholder="Enter Username"
                  />
                </div>
              </div>
              {errors.username && (
                <span className="showMessage"> {errors.username}</span>
              )}

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              {errors.password && (
                <span className="showMessage"> {errors.password}</span>
              )}

              <button type="submit" className="btn flex">
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

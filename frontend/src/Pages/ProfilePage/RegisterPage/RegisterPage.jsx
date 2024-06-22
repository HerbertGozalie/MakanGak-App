import "./RegisterPage.css";
import { useEffect } from "react";
import Footer from "../../../Components/Footer/footerEmail";
import Validation from "./RegisterValidation";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import video from "../../../assets/video2.mp4";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";

//fade
import Aos from "aos";
import "aos/dist/aos.css";

function RegisterPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [values, setValues] = useState({
    fullname: "",
    email: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (
      err.fullname === "" &&
      err.email === "" &&
      err.username === "" &&
      err.password === ""
    ) {
      axios
        .post("http://localhost:8081/register", values)
        .then((response) => {
          alert(response.data.message || "Account registered successfully");
          navigate("/LoginPage");
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
    <>
      {/* <Navbar /> */}
      <div className="logoDiv">
        <Link to="/HomePage" className="logo flex">
          <h1>
            <FaUtensils className="icon" />
            MakanGak
          </h1>
        </Link>
      </div>
      <div className="registerPage flex" data-aos="fade-right">
        <div className="contain flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
              <h2 className="title"> Solusi Laparmu, Kapanpun & Di Manapun</h2>
              <p>Lapar? Tinggal Klik!</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">Already have an account?</span>
              <Link to={"/LoginPage"}>
                <button className="btn">Login</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <h3>Let Us Know You!</h3>
            </div>

            <form action="" className="form grid" onSubmit={handleSubmit}>
              <div className="inputDiv">
                <label htmlFor="fullname">Full Name</label>
                <div className="input flex">
                  <MdDriveFileRenameOutline className="icon" />
                  <input
                    type="text"
                    name="fullname"
                    onChange={handleInput}
                    placeholder="Enter Full Name"
                  />
                </div>
              </div>
              {errors.fullname && (
                <span className="showMessage"> {errors.fullname}</span>
              )}

              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdEmail className="icon" />
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              {errors.email && (
                <span className="showMessage"> {errors.email}</span>
              )}

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
                <span>Register</span>
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

export default RegisterPage;

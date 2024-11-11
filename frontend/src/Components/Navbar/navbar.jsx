import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Modal from "../Modal/modal";
import "./navbar.css";

//import icons
import { FaUtensils } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  //PopUp Profile
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  //Navbar
  const [active, setActive] = useState("navBar");

  //Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Function to remove navBar
  const removeNavbar = () => {
    setActive("navBar");
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then(() => {
        navigate("/loginPage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/HomePage" className="logo flex">
            <h1>
              <FaUtensils className="icon" />
              MakanGak
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/HomePage" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/DirectoryPage" className="navLink">
                Directory
              </Link>
            </li>

            <li className="navItem">
              <Link to="/AboutPage" className="navLink">
                About Us
              </Link>
            </li>

            <li className="navItem">
              <Link to="/ContactUsPage" className="navLink">
                Contact
              </Link>
            </li>

            <li className="navItem">
              <Link onClick={toggleModal} className="navLink">
                Profile
              </Link>
            </li>

            <button onClick={handleLogout} className="button">
              <Link to="/LoginPage">Log Out</Link>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        {modal && <Modal toggleModal={toggleModal} />}
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

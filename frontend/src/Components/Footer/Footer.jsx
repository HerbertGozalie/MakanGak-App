import { useEffect } from "react";
import "./footer.css";
import video from "../../assets/video2.mp4";

//import icons
import { FaUtensils } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h2>EAT WITH US</h2>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" data-aos="fade-up" className="logo flex">
                <FaUtensils className="icon" />
                MakanGak
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Ini adalah footer paragraph
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <a
                href="https://wa.me/6281265571198"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
              </a>
              <a
                href="https://wa.me/6281265571198"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram className="icon" />
              </a>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rent Cars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hostel World
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST FOOD WEBSITE</small>
            <small>COPYRIGHTS RESERVED</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

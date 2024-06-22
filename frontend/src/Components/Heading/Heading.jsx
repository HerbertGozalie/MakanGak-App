import { useEffect } from "react";
import PropTypes from 'prop-types';

import "./Heading.css";
import video from "../../assets/video.mp4";

//import aos
import Aos from "aos";
import "aos/dist/aos.css";

//icons
import { FaUtensils } from "react-icons/fa";

const Heading = ({title}) => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="aboutHomeSection">
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="aboutHomeContent container">
        <div className="aboutHometextDiv flex">
          <h1 data-aos="fade-up" className="sloganTextH1">
            {title}
          </h1>

          <h1 data-aos="fade-up"className="aboutHomeTitle flex">
                <FaUtensils className="aboutHomeIcon" />
                MakanGak
          </h1>
        </div>
      </div>
    </section>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired
};

export default Heading;

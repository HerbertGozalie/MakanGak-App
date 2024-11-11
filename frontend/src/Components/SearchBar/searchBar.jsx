import { useEffect } from "react";
import "./searchBar.css";

//import icons
import { FaSearch } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";

//import aos
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="homeContent container">
        <div data-aos="fade-up" className="cardDiv">
          <div className="foodInput">
            <label htmlFor="city">Search your food:</label>
            <div className="input flex">
              <input type="search" placeholder="Enter name here..." />
              <MdDriveFileRenameOutline className="icon" />
            </div>
          </div>

          <div className="searchOptions flex">
            <FaSearch className="icon" />
            <span>SEARCH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

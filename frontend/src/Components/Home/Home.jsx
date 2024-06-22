import { useEffect, useState } from "react";
import "./home.css";
import video from "../../assets/video.mp4";
import { useNavigate } from "react-router-dom";

//import icons
import { FaSearch } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

//import aos
import Aos from "aos";
import "aos/dist/aos.css";

//import images
import abk from "../../assets/abkDepan.jpg";
import makaroni from "../../assets/makaroniLuar.jpg";
import bubur from "../../assets/buburDepan.jpg";
import abmm from "../../assets/abmmLuar.jpg";
import sola from "../../assets/solaLuar.jpg";
import legend from "../../assets/legendLuar.jpg";
import wokwok from "../../assets/wokwok.jpg";
import gohanku from "../../assets/gohanku.jpg";
import rocky from "../../assets/rocky.jpg";
import steak76 from "../../assets/steak76.png";

const Data = [
  {
    id: 1,
    imgSrc: abk,
    foodTitle: "Ayam Bakar Klaten",
    location:
      "Jl. Anggrek Cakra No.9 4, RT.4/RW.6, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
    grade: "4.3 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Ayam Bakar Klaten Pak Beng, menyediakan menu khusus Ayam bakar dan ayam Goreng dengan ciri khas rasa Klaten, manis, gurih dan rasa nya meresap sampai ke tulang-tulangnya",
  },

  {
    id: 2,
    imgSrc: makaroni,
    foodTitle: "Makaroni Ngehe",
    location:
      "Jl. Raya Kb. Jeruk No.23B, RT.4/RW.5, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
    grade: "4.5 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Kedai simpel dengan aneka hidangan makaroni dengan saus dan beragam tingkat kepedasan.",
  },

  {
    id: 3,
    imgSrc: bubur,
    foodTitle: "Bubur Ayam Pasundan",
    location:
      "Jl. Anggrek Cakra No.27 4, RT.4/RW.6, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
    grade: "4.5 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Bubur Ayam Pasundan (Bubur Anggrek Cakra) Salah satu bubur paling enak di sekitaran kampus",
  },

  {
    id: 4,
    imgSrc: abmm,
    foodTitle: "Ayam Bakar Mba Mbul Jaya",
    location:
      "Jl. Harun Raya No.3a 6, RT.3/RW.7, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
    grade: "4.2 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Rumah makan lokal yang kecil dan menyediakan aneka menu ayam, minuman manis, dan lainnya.",
  },

  {
    id: 5,
    imgSrc: sola,
    foodTitle: "Sola Gratia",
    location:
      "Jl. Anggrek No.23, kemanggisan, Kemanggisan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta",
    grade: "4.8 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Menyajikan berbagai makanan & minuman lezat namun terjangkau.",
  },

  {
    id: 6,
    imgSrc: legend,
    foodTitle: "Nasi Goreng Legend Binus Syahdan",
    location:
      "Jl. H. Sennin No.51, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
    grade: "4.4 ",
    fees: "Dibawah Rp.50.000/orang",
    description: "SPESIALIS NASI GORENG",
  },

  {
    id: 7,
    imgSrc: wokwok,
    foodTitle: "Wokwok.jkt",
    location:
      "Binus, Jl. Kyai H. Syahdan jalan U2, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
    grade: "5.0 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Nasi goreng pasti enak ,rasa yang bicara. Spesialis masakan nasi goreng / kwetiau goreng Dengan isi yang beragam . Tersedia juga : Nasi Kari Jepang ( Original) Kopi (Khas Kopitiam Medan) Liang Teh",
  },

  {
    id: 8,
    imgSrc: gohanku,
    foodTitle: "GOHAN-KU BINUS KEMANGGISAN",
    location:
      "Jl. U No.23, RT.1/RW.11, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
    grade: "4.4 ",
    fees: "Dibawah Rp.50.000/orang",
    description: "Masakan nasi bungkus jepang",
  },

  {
    id: 9,
    imgSrc: rocky,
    foodTitle: "Rocky Rooster",
    location:
      "8, Jl. Rw. Belong No.82B, RT.9/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
    grade: "4.6 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Pilihan makanan cepat saji simpel untuk ayam goreng & kentang goreng ala Amerika di lingkungan minimalis.",
  },

  {
    id: 10,
    imgSrc: steak76,
    foodTitle: "Warung Steak 76",
    location:
      "7, Jl. Kyai H. Syahdan No.16, RT.7/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
    grade: "4.4 ",
    fees: "Dibawah Rp.50.000/orang",
    description:
      "Restoran standar yang menawarkan hidangan bergaya bebakaran dan makanan cepat saji di lingkungan simpel.",
  },
];

const Home = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const getSuggestions = (query) => {
    if (query.trim() === "") return []; // No suggestions for empty input
    const filteredSuggestions = Data.filter((item) =>
      item.foodTitle.toLowerCase().includes(query.toLowerCase())
    );
    return filteredSuggestions.slice(0, 5); // Limit to 5 suggestions
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    setSuggestions(getSuggestions(newQuery)); // Update suggestions based on the new query
  };

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase(); // Trim and lowercase for better matching

    const foodId = Data.find((item) =>
      item.foodTitle.toLowerCase().includes(trimmedQuery)
    )?.id;

    if (foodId) {
      navigate(`/RestaurantPage/${foodId}`);
    } else {
      // Handle case where no results were found
      console.log("No matching food found");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Service
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Comfort Food
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv">
          <div className="foodInput">
            <label htmlFor="search">Search your food:</label>
            <div className="input flex">
              <MdDriveFileRenameOutline className="icon" />
              <input
                type="search"
                id="search"
                placeholder="Enter name here..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />

              {suggestions.length > 0 && (
                <ul className="suggestionsDropdown">
                  {suggestions.map((item) => (
                    <li key={item.id} onClick={() => handleSearch(item.id)}>
                      {" "}
                      {item.foodTitle}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="searchOptions flex" onClick={handleSearch}>
            <FaSearch className="icon" />
            <span>SEARCH</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <a
              href="https://wa.me/6281265571198"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon" />
            </a>
            <AiOutlineInstagram className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

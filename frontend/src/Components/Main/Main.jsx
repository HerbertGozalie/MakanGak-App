import { useEffect } from "react";
import "./main.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import icons
import { HiOutlineClipboardCheck } from "react-icons/hi";

import { IoMdTrendingUp } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";

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

//fade
import Aos from "aos";
import "aos/dist/aos.css";

//card data
const hot = [
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

const news = [
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
];

const umkm = [
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
];

const Main = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //aos settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Hot Trending Food &nbsp;
          <IoMdTrendingUp className="icon" />
        </h3>
      </div>
      <div className="secContent1">
        <Slider {...settings}>
          {hot.map(({ id, imgSrc, foodTitle }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleFood">
                <div className="imageDiv">
                  <img src={imgSrc} alt={foodTitle} />
                </div>

                <div className="cardInfo">
                  <div className="titleFood">
                    <h4 className="foodTitle">{foodTitle}</h4>
                  </div>
                  <div className="divButton">
                    <button className="button flex">
                      <Link to={`/RestaurantPage/${id}`}>
                        DETAILS <HiOutlineClipboardCheck className="icon" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="secTitle2">
        <h3 data-aos="fade-right" className="title">
          What&apos;s New ?
        </h3>
      </div>
      <div className="secContent grid">
        {news.map(({ id, imgSrc, foodTitle }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleFood">
              <div className="imageDiv">
                <img src={imgSrc} alt={foodTitle} />
              </div>

              <div className="cardInfo">
                <div className="titleFood">
                  <h4 className="foodTitle">{foodTitle}</h4>
                </div>
                <div className="divButton">
                  <button className="button flex">
                    <Link to={`/RestaurantPage/${id}`}>
                      DETAILS <HiOutlineClipboardCheck className="icon" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="secTitle2">
        <h3 data-aos="fade-right" className="title">
          Supporting UMKM &nbsp;
          <FaHandsHelping className="icon" />
        </h3>
      </div>
      <div className="secContent grid">
        {umkm.map(({ id, imgSrc, foodTitle }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleFood">
              <div className="imageDiv">
                <img src={imgSrc} alt={foodTitle} />
              </div>

              <div className="cardInfo">
                <div className="titleFood">
                  <h4 className="foodTitle">{foodTitle}</h4>
                </div>
                <div className="divButton">
                  <button className="button flex">
                    <Link to={`/RestaurantPage/${id}`}>
                      DETAILS <HiOutlineClipboardCheck className="icon" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;

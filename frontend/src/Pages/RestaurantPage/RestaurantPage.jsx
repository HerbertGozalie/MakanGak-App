import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantPage.css";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";

//fade
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

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const params = useParams();
  let foodData = null;

  if (params.id === "1") {
    foodData = {
      id: 1,
      imgSrc: abk,
      foodTitle: "Ayam Bakar Klaten",
      location:
        "Jl. Anggrek Cakra No.9 4, RT.4/RW.6, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
      grade: "4.3",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Ayam Bakar Klaten Pak Beng, menyediakan menu khusus Ayam bakar dan ayam Goreng dengan ciri khas rasa Klaten, manis, gurih dan rasa nya meresap sampai ke tulang-tulangnya",
    };
  } else if (params.id === "2") {
    foodData = {
      id: 2,
      imgSrc: makaroni,
      foodTitle: "Makaroni Ngehe",
      location:
        "Jl. Raya Kb. Jeruk No.23B, RT.4/RW.5, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
      grade: "4.5",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Kedai simpel dengan aneka hidangan makaroni dengan saus dan beragam tingkat kepedasan.",
    };
  } else if (params.id === "3") {
    foodData = {
      id: 3,
      imgSrc: bubur,
      foodTitle: "Bubur Ayam Pasundan",
      location:
        "Jl. Anggrek Cakra No.27 4, RT.4/RW.6, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
      grade: "4.5",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Bubur Ayam Pasundan (Bubur Anggrek Cakra) Salah satu bubur paling enak di sekitaran kampus",
    };
  } else if (params.id === "4") {
    foodData = {
      imgSrc: abmm,
      foodTitle: "Ayam Bakar Mba Mbul Jaya",
      location:
        "Jl. Harun Raya No.3a 6, RT.3/RW.7, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
      grade: "4.2",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Rumah makan lokal yang kecil dan menyediakan aneka menu ayam, minuman manis, dan lainnya.",
    };
  } else if (params.id === "5") {
    foodData = {
      imgSrc: sola,
      foodTitle: "Sola Gratia",
      location:
        "Jl. Anggrek No.23, kemanggisan, Kemanggisan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta",
      grade: "4.8",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Menyajikan berbagai makanan & minuman lezat namun terjangkau.",
    };
  } else if (params.id === "6") {
    foodData = {
      imgSrc: legend,
      foodTitle: "Nasi Goreng Legend Binus Syahdan",
      location:
        "Jl. H. Sennin No.51, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
      grade: "4.4",
      fees: "Dibawah Rp.50.000/orang",
      description: "SPESIALIS NASI GORENG",
    };
  } else if (params.id === "7") {
    foodData = {
      imgSrc: wokwok,
      foodTitle: "Wokwok.jkt",
      location:
        "Binus, Jl. Kyai H. Syahdan jalan U2, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
      grade: "5.0",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Nasi goreng pasti enak ,rasa yang bicara. Spesialis masakan nasi goreng / kwetiau goreng Dengan isi yang beragam . Tersedia juga : Nasi Kari Jepang ( Original) Kopi (Khas Kopitiam Medan) Liang Teh",
    };
  } else if (params.id === "8") {
    foodData = {
      imgSrc: gohanku,
      foodTitle: "GOHAN-KU BINUS KEMANGGISAN",
      location:
        "Jl. U No.23, RT.1/RW.11, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
      grade: "4.4",
      fees: "Dibawah Rp.50.000/orang",
      description: "Masakan nasi bungkus jepang",
    };
  } else if (params.id === "9") {
    foodData = {
      imgSrc: rocky,
      foodTitle: "Rocky Rooster",
      location:
        "8, Jl. Rw. Belong No.82B, RT.9/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
      grade: "4.6",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Pilihan makanan cepat saji simpel untuk ayam goreng & kentang goreng ala Amerika di lingkungan minimalis.",
    };
  } else if (params.id === "10") {
    foodData = {
      imgSrc: steak76,
      foodTitle: "Warung Steak 76",
      location:
        "7, Jl. Kyai H. Syahdan No.16, RT.7/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
      grade: "4.4",
      fees: "Dibawah Rp.50.000/orang",
      description:
        "Restoran standar yang menawarkan hidangan bergaya bebakaran dan makanan cepat saji di lingkungan simpel.",
    };
  }

  return (
    <>
      <Navbar />
      if (foodData != null)
      {
        <div className="content">
          <div data-aos="fade-up" className="singleFood">
            <div className="imageDiv">
              <img src={foodData.imgSrc} alt={foodData.foodTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="foodTitle">{foodData.foodTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{foodData.location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>
                    {foodData.grade}
                    <small>+1</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{foodData.fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{foodData.description}</p>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  );
}

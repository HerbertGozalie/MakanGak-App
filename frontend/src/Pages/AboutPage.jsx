import Navbar from "../Components/Navbar/navbar";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Heading from "../Components/Heading/Heading";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Heading title="About Us"/>
      <About />
      <Footer />
    </>
  );
}
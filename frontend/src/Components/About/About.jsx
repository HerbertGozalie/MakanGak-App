import { useEffect } from "react";
import "./About.css";
import Feature from "../Feature/Feature";

//fade
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  // animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="aboutUs section container">
      <div data-aos="fade-right" className="aboutUsSection">
        <div className="aboutUs-feature flex">
          <Feature
            title="What is MakanGak"
            text="In today's fast-paced world, navigating the diverse culinary landscape can be overwhelming. With countless dining options and varying preferences, choosing the perfect restaurant or meal can feel like a daunting task. MAKANGAK was created to simplify this process, serving as your personalized culinary companion. We understand that every individual has unique tastes and dietary needs. Our platform is designed to connect you with dining experiences that truly resonate with you."
          />
        </div>
        <div className="aboutUs-heading flex">
          <h1 className="aboutUs-text">
            Your Culinary Compass: Guiding You to Delicious Discoveries
          </h1>
          <p>Find Your Flavor, Your Way. Your Culinary Compass.</p>
        </div>
        <div className="aboutUs-container">
          <Feature
            title="Our Approach"
            text="Our approach revolves around providing an intuitive search experience, delivering personalized recommendations based on your preferences and past choices, empowering you with authentic reviews and ratings from fellow food enthusiasts, and fostering connections between discerning diners and local businesses."
          />

          <Feature
            title="Our Vision"
            text="We envision MAKANGAK as a thriving community of food lovers, united by a passion for exploration and discovery. We are dedicated to enriching your dining experiences, fostering meaningful connections within the culinary world, and empowering local businesses."
          />

          <Feature
            title="Join Us on Your Culinary Journey"
            text="Download MAKANGAK today and embark on a culinary adventure tailored to your tastes. Whether you're a seasoned foodie or simply seeking a convenient meal, let us guide you towards your next unforgettable dining experience."
          />
        </div>
      </div>
    </section>
  );
};

export default About;

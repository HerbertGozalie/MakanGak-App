import { useEffect, useState } from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTiktokLogo } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineRecommend } from "react-icons/md";
import { TbDevices } from "react-icons/tb";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

//components
import ContactFeature from "../ContactFeature/contactFeature";
import IconBox from "../IconBox/iconBox";
//fade
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    questionIcon: <IconBox icon={<MdOutlineAccountCircle />} />,
    question: "How do I create an account?",
    answer:
      "You can create a free MAKANGAK account by downloading the app from the App Store or Google Play. Once installed, simply follow the prompts to sign up using your email address or social media account.",
  },
  {
    id: 2,
    questionIcon: <IconBox icon={<MdOutlineRecommend />} />,
    question: "How does MAKANGAK personalize recommendations?",
    answer:
      "MAKANGAK uses your saved preferences, past searches, and reviews to create tailored recommendations that match your unique tastes and dietary needs. The more you use the app, the better it gets at suggesting places you'll love.",
  },
  {
    id: 3,
    questionIcon: <IconBox icon={<TbDevices />} />,
    question: "Is MAKANGAK available for both iOS and Android devices?",
    answer:
      "Yes, MAKANGAK is available for download on both iOS and Android devices. You can find it in the App Store and Google Play, respectively.",
  },
  {
    id: 4,
    questionIcon: <IconBox icon={<MdSignalWifiConnectedNoInternet0 />} />,
    question: "Can I use MAKANGAK without an internet connection?",
    answer:
      "While some basic features might be available offline, an internet connection is required for optimal use of MAKANGAK. This allows you to access the most up-to-date restaurant information, reviews, and personalized recommendations.",
  },
  {
    id: 5,
    questionIcon: <IconBox icon={<MdSupportAgent />} />,
    question: "How can I contact MAKANGAK support?",
    answer:
      "If you have any questions or issues, you can reach our support team by emailing us at [email protected] or through the Contact Us form on our website. We're always happy to help!",
  },
];

const Contact = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <section data-aos="fade-up" className="contact section container">
      <div className="contactContent grid">
        <ContactFeature
          logo={<FaWhatsapp />}
          title="Chat with us"
          desc="Speak to our friendly team"
          link="https://wa.me/6281265571198"
          text="+6281265571198"
        />
        <ContactFeature
          logo={<MdOutlineEmail />}
          title="Email us your experience"
          desc="Email to our friendly team"
          link="https://wa.me/6281265571198"
          text="+6281265571198"
        />
        <ContactFeature
          logo={<IoLogoInstagram />}
          title="Visit our Instagram page"
          desc="Keep up to date"
          link="https://wa.me/6281265571198"
          text="+6281265571198"
        />
        <ContactFeature
          logo={<PiTiktokLogo />}
          title="Watch our content"
          desc="More content about food"
          link="https://wa.me/6281265571198"
          text="+6281265571198"
        />
      </div>

      <div className="wrapper flex">
        <div className="question">
          <h1>Frequently Asked Question</h1>
        </div>
        <div className="accordionContent">
          {Data.map(({ id, questionIcon, question, answer }) => {
            return (
              <div key={id} className="item">
                <div className="title flex" onClick={() => toggle(id)}>
                  <span className="questionIcon">{questionIcon}</span>
                  <div className="insideTitle flex">
                    <h5>{question}</h5>
                    <span>{selected === id ? "-" : "+"}</span>
                  </div>
                </div>
                <div className={selected === id ? "content2 show" : "content2"}>
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

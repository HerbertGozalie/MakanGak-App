import PropTypes from 'prop-types';
import './contactFeature.css';
import IconBox from '../IconBox/iconBox';


const contactFeature = ({logo, title, desc, link, text}) => {
  return (
    <div className="contactFeatureDiv">
      <div className="contactInfo">
        <IconBox icon={logo}/> 
        <div className="info flex">
          <div className="infoTitle">
            <h5>{title}</h5>
          </div>

          <div className="infoDesc">
            <p>{desc}</p>
          </div>
          
          <div className="infoLink">
            <a href={link} target="_blank" rel="noopener noreferrer"className="contactLink">
              {text}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

contactFeature.propTypes = {
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired

};

export default contactFeature

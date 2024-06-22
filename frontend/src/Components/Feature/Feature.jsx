import PropTypes from 'prop-types';
import "./Feature.css";

const Feature = ({title, text}) => {
  return(
    <div className="features-container">
      <div className="feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature

import PropTypes from 'prop-types';
import './iconBox.css';

const iconBox = ({icon}) => {
  return (
    <div className="iconBox">
      <span className="continent flex">
        {icon}
      </span>
    </div>
  )
}

iconBox.propTypes = {
  icon: PropTypes.object.isRequired
};

export default iconBox

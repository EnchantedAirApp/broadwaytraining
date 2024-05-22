import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DisplayComponent = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderComponent = (Component) => {
    return <Component />;
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="component-container">
        {renderComponent(components[currentIndex])}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

DisplayComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default DisplayComponent;

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return(
    <div className="section" data-test="section">
      <div className="container" data-test="container">
        <div className="title" data-test="title">{ title }</div>
      </div>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
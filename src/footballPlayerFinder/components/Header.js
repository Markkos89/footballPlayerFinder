import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return(
    <div className="section">
      <div className="container">
        <div className="title">{ title }</div>
      </div>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
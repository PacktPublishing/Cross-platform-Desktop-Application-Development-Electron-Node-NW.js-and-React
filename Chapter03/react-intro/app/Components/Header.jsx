import React from "react";
import PropTypes from "prop-types";
 /**
  * @param {ReactPropTypes} props
  * @returns {ReactElement}
  */
export default function Header( props ){
  const { title } = props;
  return (
    <header>
      <h3>{title}</h3>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

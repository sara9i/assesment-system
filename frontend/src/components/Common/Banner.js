import { message } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import style from './Banner.module.css';

const Banner = ({ message }) => (
  <div className={style.wrapper}>
    <p>{message}</p>
  </div>
);

Banner.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Banner;

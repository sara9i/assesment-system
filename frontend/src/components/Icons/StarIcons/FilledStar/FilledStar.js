import React from 'react';
import { PropTypes } from 'prop-types';

import './FilledStar.scss';

const FilledStar = ({ fillType }) => {
  const className = 'c-FilledStar';
  const classNames = [className, `${className}--${fillType}`].join(' ');

  return (
    <svg
      className={classNames}
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M7.641 2.06a.4.4 0 01.718 0l1.608 3.258a.4.4 0 00.301.219l3.597.526a.4.4 0 01.222.682L11.484 9.28a.4.4 0 00-.115.354l.614 3.58a.4.4 0 01-.58.422l-3.217-1.692a.4.4 0 00-.372 0l-3.216 1.692a.4.4 0 01-.58-.422l.613-3.58a.4.4 0 00-.115-.354L1.914 6.745a.4.4 0 01.221-.682l3.597-.526a.4.4 0 00.301-.219L7.641 2.06z"></path>
    </svg>
  );
};

FilledStar.propTypes = {
  fillType: PropTypes.oneOf(['primary', 'greyed']),
};

export default FilledStar;

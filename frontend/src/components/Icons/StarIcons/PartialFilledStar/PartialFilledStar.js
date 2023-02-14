import React from 'react';

const PartialFilledStar = () => {
  const className = 'c-PartialFilledStar';

  return (
    <svg
      className={className}
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="#FADB14"
          d="M7.641 2.06a.4.4 0 01.718 0l1.608 3.258a.4.4 0 00.301.219l3.597.526a.4.4 0 01.222.682L11.484 9.28a.4.4 0 00-.115.354l.614 3.58a.4.4 0 01-.58.422l-3.217-1.692a.4.4 0 00-.372 0l-3.216 1.692a.4.4 0 01-.58-.422l.613-3.58a.4.4 0 00-.115-.354L1.914 6.745a.4.4 0 01.221-.682l3.597-.526a.4.4 0 00.301-.219L7.641 2.06z"
        ></path>
      </g>
      <g clipPath="url(#clip1)">
        <path
          fill="#F2F2F2"
          d="M7.641 2.06a.4.4 0 01.718 0l1.608 3.258a.4.4 0 00.301.219l3.597.526a.4.4 0 01.222.682L11.484 9.28a.4.4 0 00-.115.354l.614 3.58a.4.4 0 01-.58.422l-3.217-1.692a.4.4 0 00-.372 0l-3.216 1.692a.4.4 0 01-.58-.422l.613-3.58a.4.4 0 00-.115-.354L1.914 6.745a.4.4 0 01.221-.682l3.597-.526a.4.4 0 00.301-.219L7.641 2.06z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H8V16H0z"></path>
        </clipPath>
        <clipPath id="clip1">
          <path fill="#fff" d="M0 0H8V16H0z" transform="translate(8)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PartialFilledStar;

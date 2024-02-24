import React from "react";

const CustomDivider = ({ classParam }: { classParam?: string }) => {
  return (
    <svg
      // width="1916"
      height="307"
      viewBox="0 0 1916 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 289.5V103.5L297 0L1368 119.5L1916 20.5V306.5H1601.5L0 289.5Z"
        fill="url(#paint0_linear_1637_9)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1637_9"
          x1="958"
          y1="0"
          x2="958"
          y2="306.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D305A" />
          <stop offset="0.570504" stopColor="#0A101E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CustomDivider;

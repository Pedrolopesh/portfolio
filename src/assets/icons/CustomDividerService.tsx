import React from "react";

const CustomDividerService = ({ classParam }: { classParam?: string }) => {
  return (
    <svg viewBox="0 0 1920 684" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1920" height="446" fill="url(#paint0_linear_1729_2)" />
      <path
        d="M1920 459.201V603.631L1622.38 684L549.144 591.207L0 668.082V446H315.156L1920 459.201Z"
        fill="url(#paint1_linear_1729_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1729_2"
          x1="960"
          y1="0"
          x2="960"
          y2="446"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D2F58" />
          <stop offset="0.735" stopColor="#1D2F58" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1729_2"
          x1="960"
          y1="359"
          x2="960"
          y2="787"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.15" stopColor="#0A101E" stopOpacity="0" />
          <stop offset="0.85" stopColor="#1D2F58" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CustomDividerService;

import React, { memo } from "react";
import * as colors from "../../../styles/colors.config";

const svgs = {
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  arrowCircleDown: "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z",
  arrowCircleLeft:
    "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
  arrowCircleRight: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z",
  arrowCircleUp: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z",
  map: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
};

type Props = {
  shape: keyof typeof svgs;
  color?: keyof typeof colors;
  strokeWidth?: number;
};

const PREVENT_FROM_PURGE = `
stroke-charcoal-500 text-charcoal-100
stroke-persianGreen-500 text-persianGreen-100
stroke-yellowCrayola-500 text-yellowCrayola-100
stroke-sandyBrown-500 text-sandyBrown-100
stroke-burntSienna-500 text-burntSienna-100
`;

const IconComponent: React.FC<Props> = ({
  shape = "star",
  color = "charcoal",
  strokeWidth = 1,
}) => (
  PREVENT_FROM_PURGE,
  (
    <svg
      {...{
        xmlns: "http://www.w3.org/2000/svg",
        // todo - prevent dynamic classes from purge logic
        className: `w-12 h-12 transition duration-300 fill-current stroke-${color}-500 text-${color}-100 hover:stroke-${color}-900 hover:text-${color}-300`,
        viewBox: "0 0 24 24",
        shapeRendering: "geometricPrecision",
      }}
    >
      <path
        {...{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth,
          d: svgs[shape],
        }}
      />
    </svg>
  )
);

export const Icon = memo(IconComponent);

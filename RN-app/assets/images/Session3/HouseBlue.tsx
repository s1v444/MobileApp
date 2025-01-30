import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HouseBlue = () => (
  <Svg
    width={25}
    height={24}
    fill="none"
  >
    <Path
      stroke="#0560FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2.5 22h20"
    />
    <Path
      fill="#0560FA"
      d="M3.45 22 3.5 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"
    />
    <Path
      stroke="#0560FA"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.45 22 3.5 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"
    />
    <Path
      fill="#0560FA"
      stroke="#0560FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16 11H9c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.5 16.25v1.5M11 7.5h3"
    />
  </Svg>
)
export default HouseBlue


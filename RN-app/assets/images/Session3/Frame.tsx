import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Frame = () => (
  <Svg
    width={6}
    height={10}
    fill="none"
  >
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.48 8.53 5 5 1.48 1.47"
    />
  </Svg>
)
export default Frame

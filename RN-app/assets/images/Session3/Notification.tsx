import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Notification = () => (
  <Svg
    width={20}
    height={20}
    fill="none"
  >
    <Path
      stroke="#3A3A3A"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M10.017 2.425c-2.759 0-5 2.242-5 5v2.408c0 .509-.217 1.284-.475 1.717l-.959 1.592c-.591.983-.183 2.075.9 2.441 3.592 1.2 7.467 1.2 11.059 0a1.669 1.669 0 0 0 .9-2.441l-.959-1.592c-.25-.433-.466-1.208-.466-1.717V7.425c0-2.75-2.25-5-5-5Z"
    />
    <Path
      stroke="#3A3A3A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M11.558 2.667a5.628 5.628 0 0 0-3.083 0 1.654 1.654 0 0 1 1.542-1.05c.7 0 1.3.433 1.541 1.05Z"
    />
    <Path
      stroke="#3A3A3A"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M12.517 15.883c0 1.375-1.125 2.5-2.5 2.5a2.509 2.509 0 0 1-1.767-.733 2.509 2.509 0 0 1-.733-1.767"
    />
  </Svg>
)
export default Notification

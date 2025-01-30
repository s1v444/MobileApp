import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddSquare = () => (
  <Svg
    width={14}
    height={14}
    fill="none"
  >
    <Path
      stroke="#0560FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.667 7h4.666M7 9.333V4.667M5.25 12.833h3.5c2.917 0 4.083-1.166 4.083-4.083v-3.5c0-2.917-1.166-4.083-4.083-4.083h-3.5c-2.917 0-4.083 1.166-4.083 4.083v3.5c0 2.917 1.166 4.083 4.083 4.083Z"
    />
  </Svg>
)
export default AddSquare

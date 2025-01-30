import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const Toggle = () => (
  <Svg
    width={44}
    height={26}
    fill="none"
  >
    <Rect width={40.625} height={21.125} y={2.438} fill="#D7D7D7" rx={10.563} />
    <Rect
      width={17.875}
      height={17.875}
      x={2.438}
      y={4.063}
      fill="#fff"
      rx={8.938}
    />
  </Svg>
)
export default Toggle

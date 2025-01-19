import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Eye = () => (
  <Svg
    width={20}
    height={20}
    fill="none"
  >
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.212}
      d="M12.841 10.178a2.89 2.89 0 0 1-2.893 2.894 2.89 2.89 0 0 1-2.894-2.894 2.89 2.89 0 0 1 2.894-2.893 2.89 2.89 0 0 1 2.893 2.893Z"
    />
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.212}
      d="M9.948 16.863c2.853 0 5.512-1.681 7.363-4.59.728-1.14.728-3.056 0-4.196-1.85-2.91-4.51-4.59-7.363-4.59-2.853 0-5.513 1.68-7.364 4.59-.727 1.14-.727 3.055 0 4.195 1.851 2.91 4.51 4.591 7.364 4.591Z"
    />
  </Svg>
)
export default Eye;
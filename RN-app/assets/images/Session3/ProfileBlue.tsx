import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileBlue = () => (
  <Svg
    width={25}
    height={24}
    fill="none"
  >
    <Path
      fill="#0560FA"
      stroke="#0560FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
    />
    <Path
      fill="#fff"
      stroke="#0560FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.62 12.78a.963.963 0 0 0-.24 0 3.269 3.269 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55ZM19.24 19.38A9.934 9.934 0 0 1 12.5 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58Z"
    />
  </Svg>
)
export default ProfileBlue
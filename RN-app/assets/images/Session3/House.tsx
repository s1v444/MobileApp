import * as React from "react"
import Svg, { Path } from "react-native-svg"
const House = () => (
  <Svg
    width={21}
    height={20}
    fill="none"
  >
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.212}
      d="M2.544 18.215H18.71"
    />
    <Path
      stroke="#292D32"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.212}
      d="m3.312 18.215.04-9.723c0-.493.235-.962.623-1.27l5.658-4.404a1.625 1.625 0 0 1 1.989 0l5.657 4.397c.396.307.623.776.623 1.277v9.723"
    />
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.212}
      d="M13.456 9.324H7.798a1.21 1.21 0 0 0-1.212 1.213v7.678h8.083v-7.678a1.21 1.21 0 0 0-1.213-1.213ZM9.01 13.568v1.212M9.415 6.495h2.425"
    />
  </Svg>
)
export default House

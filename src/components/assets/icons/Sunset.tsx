import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSunset(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.6 9.9c-.1 0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L11 6.6V2c0-.6.4-1 1-1s1 .4 1 1v4.6l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1zm-6.7 2.4c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L4.9 9.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.4 1.4zM18 18c0 .6-.4 1-1 1s-1-.4-1-1c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 .6-.4 1-1 1s-1-.4-1-1c0-3.3 2.7-6 6-6s6 2.7 6 6zM3 19H1c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm17-1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1zm-.9-5.7c-.2.2-.4.3-.7.3-.3 0-.6-.1-.7-.3-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.4 1.4zM1 21c-.6 0-1 .4-1 1s.4 1 1 1h22c.6 0 1-.4 1-1s-.4-1-1-1H1z"
        clipRule="evenodd"
      />
      <Mask id="sunset_svg__a" width={24} height={22} x={0} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.6 9.9c-.1 0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L11 6.6V2c0-.6.4-1 1-1s1 .4 1 1v4.6l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1zm-6.7 2.4c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L4.9 9.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.4 1.4zM18 18c0 .6-.4 1-1 1s-1-.4-1-1c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 .6-.4 1-1 1s-1-.4-1-1c0-3.3 2.7-6 6-6s6 2.7 6 6zM3 19H1c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm17-1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1zm-.9-5.7c-.2.2-.4.3-.7.3-.3 0-.6-.1-.7-.3-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.4 1.4zM1 21c-.6 0-1 .4-1 1s.4 1 1 1h22c.6 0 1-.4 1-1s-.4-1-1-1H1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#sunset_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSunset;

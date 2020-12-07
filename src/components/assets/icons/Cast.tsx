import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCast(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M4.015 3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1h-16c-.6 0-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1V6c0-1.7 1.3-3 3-3zm2.1 18c.5-.1.9-.7.8-1.2-.5-2.4-2.3-4.2-4.7-4.7-.6-.1-1.1.3-1.2.8-.1.5.3 1.1.8 1.2 1.6.3 2.8 1.5 3.1 3.1.1.5.5.8 1 .8h.2zm-4-9.9c-.5-.1-1 .3-1.1.9-.1.5.3 1 .9 1.1 3.7.4 6.7 3.3 7.1 7.1 0 .4.4.8.9.8h.1c.5-.1.9-.6.9-1.1-.5-4.7-4.1-8.3-8.8-8.8zm-.8 8.2c.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7z"
        clipRule="evenodd"
      />
      <Mask id="cast_svg__a" width={23} height={18} x={1} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M4.015 3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1h-16c-.6 0-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1V6c0-1.7 1.3-3 3-3zm2.1 18c.5-.1.9-.7.8-1.2-.5-2.4-2.3-4.2-4.7-4.7-.6-.1-1.1.3-1.2.8-.1.5.3 1.1.8 1.2 1.6.3 2.8 1.5 3.1 3.1.1.5.5.8 1 .8h.2zm-4-9.9c-.5-.1-1 .3-1.1.9-.1.5.3 1 .9 1.1 3.7.4 6.7 3.3 7.1 7.1 0 .4.4.8.9.8h.1c.5-.1.9-.6.9-1.1-.5-4.7-4.1-8.3-8.8-8.8zm-.8 8.2c.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#cast_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCast;
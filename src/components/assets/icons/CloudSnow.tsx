import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCloudSnow(props: SvgProps) {
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
        d="M23.597 15.197c-.6 1.501-1.699 2.701-3.198 3.302-.1.1-.3.1-.4.1-.4 0-.8-.2-.9-.6-.2-.5 0-1.1.5-1.301 1-.4 1.7-1.2 2.1-2.2.399-1.001.399-2.101-.1-3.102-.6-1.5-2-2.4-3.599-2.4h-1.299c-.5 0-.9-.3-1-.8-.999-3.702-4.796-6.003-8.494-5.002-3.698 1-5.997 4.801-4.997 8.502.4 1.5 1.199 2.801 2.398 3.702.4.3.5 1 .2 1.4-.3.4-1 .5-1.4.2a9.154 9.154 0 01-3.097-4.801A8.85 8.85 0 016.707 1.293c4.597-1.2 9.195 1.4 10.694 5.702h.6c2.398 0 4.497 1.4 5.496 3.601.6 1.5.7 3.101.1 4.601zm-14.891.1c-.4-.4-1-.4-1.4 0-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4.05.05.076.101.1.151.026.05.05.1.1.15.2.2.4.3.7.3.3 0 .5-.1.7-.3.1-.1.2-.2.2-.3.1-.1.1-.3.1-.4 0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3zm-1.4 4.002c.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7zm3.998-2c-.1.1-.2.2-.2.3a.359.359 0 01-.037.13c-.028.07-.063.152-.063.27 0 .3.1.5.3.7.1.1.2.2.3.2.042 0 .083.017.131.037.069.028.152.063.269.063.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0zm0 4c.3-.4 1-.4 1.4 0 .1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.05.05-.1.076-.15.1-.05.026-.1.051-.15.101-.1.1-.3.1-.4.1-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4 0-.1.1-.2.2-.3zm5.397-6.001c-.4-.4-1-.4-1.399 0-.1.1-.2.2-.2.3 0 .05-.025.125-.05.2-.025.075-.05.15-.05.2 0 .1 0 .3.1.4.05.05.075.1.1.15.025.05.05.1.1.15.2.2.4.3.7.3.3 0 .5-.1.7-.3.199-.2.299-.4.299-.7 0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3zm-.2 3.85c.025.026.05.05.1.05 0 0 .1 0 .1.1.2.2.3.401.3.701 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.699-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.3.6-.4.9-.3.057.057.081.082.11.092.022.008.047.008.09.008.05 0 .074.025.1.05z"
        clipRule="evenodd"
      />
      <Mask id="cloud-snow_svg__a" width={24} height={22} x={0} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23.597 15.197c-.6 1.501-1.699 2.701-3.198 3.302-.1.1-.3.1-.4.1-.4 0-.8-.2-.9-.6-.2-.5 0-1.1.5-1.301 1-.4 1.7-1.2 2.1-2.2.399-1.001.399-2.101-.1-3.102-.6-1.5-2-2.4-3.599-2.4h-1.299c-.5 0-.9-.3-1-.8-.999-3.702-4.796-6.003-8.494-5.002-3.698 1-5.997 4.801-4.997 8.502.4 1.5 1.199 2.801 2.398 3.702.4.3.5 1 .2 1.4-.3.4-1 .5-1.4.2a9.154 9.154 0 01-3.097-4.801A8.85 8.85 0 016.707 1.293c4.597-1.2 9.195 1.4 10.694 5.702h.6c2.398 0 4.497 1.4 5.496 3.601.6 1.5.7 3.101.1 4.601zm-14.891.1c-.4-.4-1-.4-1.4 0-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4.05.05.076.101.1.151.026.05.05.1.1.15.2.2.4.3.7.3.3 0 .5-.1.7-.3.1-.1.2-.2.2-.3.1-.1.1-.3.1-.4 0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3zm-1.4 4.002c.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7zm3.998-2c-.1.1-.2.2-.2.3a.359.359 0 01-.037.13c-.028.07-.063.152-.063.27 0 .3.1.5.3.7.1.1.2.2.3.2.042 0 .083.017.131.037.069.028.152.063.269.063.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0zm0 4c.3-.4 1-.4 1.4 0 .1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.05.05-.1.076-.15.1-.05.026-.1.051-.15.101-.1.1-.3.1-.4.1-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4 0-.1.1-.2.2-.3zm5.397-6.001c-.4-.4-1-.4-1.399 0-.1.1-.2.2-.2.3 0 .05-.025.125-.05.2-.025.075-.05.15-.05.2 0 .1 0 .3.1.4.05.05.075.1.1.15.025.05.05.1.1.15.2.2.4.3.7.3.3 0 .5-.1.7-.3.199-.2.299-.4.299-.7 0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3zm-.2 3.85c.025.026.05.05.1.05 0 0 .1 0 .1.1.2.2.3.401.3.701 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.699-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.3.6-.4.9-.3.057.057.081.082.11.092.022.008.047.008.09.008.05 0 .074.025.1.05z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#cloud-snow_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCloudSnow;

import { triangle } from "polished";
import { Path, Svg } from "react-native-svg";

//All icons are from Phosphor Icons. They are bold unless otherwise specified.

export const HomeOutline = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"></Path>
    </Svg>
  );
};

export const HomeFill = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></Path>
    </Svg>
  );
};

export const GridOutline = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></Path>
    </Svg>
  );
};

export const GridFill = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></Path>
    </Svg>
  );
};

export const Plus = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></Path>
    </Svg>
  );
};

export const ChatOutline = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M216,44H40A20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44Zm-4,144H80a11.93,11.93,0,0,0-7.84,2.92L44,215.23V68H212Z"></Path>
    </Svg>
  );
};

export const ChatFill = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M232,64V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z"></Path>
    </Svg>
  );
};

export const NotificationsOutline = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68ZM172,224a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,224Z"></Path>
    </Svg>
  );
};

export const NotificationsFill = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z"></Path>
    </Svg>
  );
};

export const ArrowRight = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></Path>
    </Svg>
  );
};

export const Close = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></Path>
    </Svg>
  );
};

export const Retry = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"></Path>
    </Svg>
  );
};
export const Dotdotdot = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28,28,0,0,0,208,100Z"></Path>
    </Svg>
  );
};
//
//regular
export const Comment = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></Path>
    </Svg>
  );
};
//
//regular
export const Triangle = ({ height, width = height, colour }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={colour} viewBox="0 0 256 256">
      <Path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.34,24.34,0,0,0,40.55,224h174.9a24.34,24.34,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8Z"></Path>
    </Svg>
  );
};

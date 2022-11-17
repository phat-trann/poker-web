import React from 'react';
import { Stage, Layer, Ellipse } from 'react-konva';

/* Function get darken or lighten color */
const adjustColor = (color: string, percent: number) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return `#${RR}${GG}${BB}`;
};
const greenHex = '#068117';
const darkGreenHex = adjustColor(greenHex, -25);

const GameSection: React.FC<{ themeColor: string }> = ({ themeColor }) => {
  return (
    <Stage width={1200} height={800}>
      <Layer>
        <Ellipse
          x={600}
          y={420}
          radiusX={450}
          radiusY={325}
          fill={adjustColor(themeColor, -70)}
        />
        <Ellipse
          x={600}
          y={400}
          radiusX={450}
          radiusY={325}
          fillLinearGradientStartPoint={{x: 200, y: 700}}
          fillLinearGradientEndPoint={{x: 1000, y: 75}}
          fillLinearGradientColorStops={[0, themeColor, 1, adjustColor(themeColor, 100)]}
        />
        <Ellipse
          x={600}
          y={400}
          radiusX={415}
          radiusY={290}
          fill={adjustColor(themeColor, -65)}
        />
        <Ellipse
          x={600}
          y={405}
          radiusX={410}
          radiusY={280}
          fill={darkGreenHex}
        />
        <Ellipse
          x={600}
          y={405}
          radiusX={405}
          radiusY={275}
          fill={darkGreenHex}
          shadowColor="black"
          shadowBlur={20}
          shadowOpacity={0.3}
        />
        <Ellipse
          x={600}
          y={405}
          radiusX={365}
          radiusY={235}
          fill={greenHex}
          stroke={adjustColor(themeColor, 50)}
          strokeWidth={8}
          shadowColor="black"
          shadowBlur={20}
          shadowOpacity={0.3}
        />
      </Layer>
    </Stage>
  );
};

export default GameSection;

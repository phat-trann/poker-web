import React from 'react';
import { Stage, Layer, Ellipse } from 'react-konva';

const GameSection = () => {
  return (
    <Stage width={1200} height={800}>
      <Layer>
        <Ellipse
          x={600}
          y={420}
          radiusX={450}
          radiusY={325}
          fill="blue"
        />
        <Ellipse
          x={600}
          y={400}
          radiusX={450}
          radiusY={325}
          fill="#63C6FF"
        />
        <Ellipse
          x={600}
          y={400}
          radiusX={415}
          radiusY={290}
          fill="#000"
        />
        <Ellipse
          x={600}
          y={405}
          radiusX={410}
          radiusY={280}
          fill="green"
        />
      </Layer>
    </Stage>
  );
};

export default GameSection;

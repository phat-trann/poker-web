import React from 'react';
import { Circle, Rect } from 'react-konva';
import useImage from 'use-image';

type PlayerType = {
  imageUrl?: string;
  isLeft?: boolean;
  isCenter?: boolean;
  isEmpty: boolean;
  isFocus: boolean;
  x: number;
  y: number;
};

const Player: React.FC<PlayerType> = ({
  imageUrl = '/discord-mascot.png',
  isLeft = true,
  isCenter = false,
  isEmpty,
  isFocus,
  x,
  y,
}) => {
  const [image] = useImage(imageUrl);

  isFocus = !isEmpty && isFocus;

  return (
    <>
      {!isEmpty && (
        <Rect
          x={isLeft ? x : x - 160}
          y={!isCenter ? y - 30 : y - 35}
          width={!isCenter ? 160 : 200}
          height={!isCenter ? 60 : 70}
          cornerRadius={50}
          fill="#7ebcec"
          scale={{ x: isFocus ? 1.2 : 1, y: isFocus ? 1.2 : 1 }}
          shadowColor="black"
          shadowBlur={10}
          shadowOpacity={0.3}
        />
      )}
      <Circle
        x={x}
        y={y}
        radius={50}
        fillPatternImage={image}
        fillPatternX={50}
        fillPatternY={50}
        fillPatternScale={{
          x: 100 / (image?.width || 50),
          y: 100 / (image?.height || 50),
        }}
        opacity={isEmpty ? 0.8 : 1}
        scale={{ x: isFocus ? 1.2 : 1, y: isFocus ? 1.2 : 1 }}
        shadowColor="black"
        shadowBlur={10}
        shadowOpacity={0.3}
      />
    </>
  );
};

export default Player;

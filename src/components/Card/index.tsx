import React from 'react';
import { Rect, Text } from 'react-konva';
import useImage from 'use-image';

interface CardType {
  number: number;
  type: 'club' | 'diamond' | 'heart' | 'spade';
  x: number;
  y: number;
}

const config = {
  color: {
    diamond: '#cd0311',
    heart: '#cd0311',
    club: '#000',
    spade: '#000',
  },
};

const textForNumber: { [key: number]: string } = {
  1: 'A',
  11: 'J',
  12: 'Q',
  13: 'K',
};

const Card: React.FC<CardType> = ({ number, type, x, y }) => {
  const [image] = useImage(`/images/cards/${type}.jpg`);
  console.log(image);
  return number && type ? (
    <>
      <Rect
        x={x}
        y={y}
        width={400}
        height={545}
        cornerRadius={50}
        fillPatternImage={image}
        fillPatternX={400}
        fillPatternY={545}
        scale={{ x: 0.2, y: 0.2 }}
        shadowColor="black"
        shadowBlur={20}
        shadowOpacity={0.5}
      />
      <Text
        text={textForNumber[number] || number.toString()}
        fontSize={25}
        x={textForNumber[number] ? x + 8 : x + 10}
        y={y + 5}
        fontStyle="bold"
        fill={config.color[type]}
      />
    </>
  ) : (
    <></>
  );
};

export default Card;

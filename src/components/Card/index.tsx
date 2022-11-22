import React from 'react';
import { Rect, Text } from 'react-konva';
import useImage from 'use-image';

interface CardType {
  number: number;
  type: 'club' | 'diamond' | 'heart' | 'spade';
  x: number;
  y: number;
  isShow: boolean;
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

const Card: React.FC<CardType> = ({ number, type, x, y, isShow }) => {
  const [image] = useImage(`/images/cards/${type}.jpg`);

  if (!isShow)
    return (
      <>
        <Rect
          x={x}
          y={y}
          width={80}
          height={109}
          cornerRadius={10}
          fill="white"
          shadowColor="black"
          shadowBlur={20}
          shadowOpacity={0.5}
        />
        <Rect
          x={x + 7}
          y={y + 7}
          width={66}
          height={95}
          cornerRadius={10}
          fill="#ff505b"
        />
      </>
    );

  return number && type ? (
    <>
      <Rect
        x={x}
        y={y}
        width={80}
        height={109}
        cornerRadius={10}
        fillPatternImage={image}
        fillPatternX={80}
        fillPatternY={109}
        fillPatternScale={{ x: 0.2, y: 0.2 }}
        shadowColor="black"
        shadowBlur={20}
        shadowOpacity={0.5}
      />
      <Text
        text={textForNumber[number] || number.toString()}
        fontSize={25}
        x={number === 10 ? x + 3 : textForNumber[number] ? x + 8 : x + 10}
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

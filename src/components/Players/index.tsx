import React from 'react';
import { Layer } from 'react-konva';
import Card from '../Card';
import Player from '../Player';

const Players = () => {
  return (
    <Layer>
      <Card number={1} type="heart" x={380} y={340} isShow={true} />
      <Card number={3} type="spade" x={470} y={340} isShow={true} />
      <Card number={3} type="diamond" x={560} y={340} isShow={true} />
      <Card number={12} type="club" x={650} y={340} isShow={true} />
      <Card number={10} type="heart" x={740} y={340} isShow={true} />
      <Player x={250} y={170} isEmpty={false} isFocus={false} isFold={false} />
      <Player x={120} y={370} isEmpty={false} isFocus={false} isFold={true} />
      <Player x={180} y={570} isEmpty={false} isFocus={false} isFold={true} />
      <Player
        x={525}
        y={650}
        isEmpty={false}
        isFocus={false}
        isCenter={true}
        moreInformation="Raise to $270"
        isFold={false}
      />
      <Player
        x={950}
        y={170}
        isLeft={false}
        isEmpty={false}
        isFocus={false}
        isFold={false}
      />
      <Player
        x={1080}
        y={370}
        isLeft={false}
        isEmpty={false}
        isFocus={false}
        isFold={false}
      />
      <Player
        x={1020}
        y={570}
        isLeft={false}
        isEmpty={false}
        isFocus={false}
        isFold={false}
      />
    </Layer>
  );
};

export default Players;

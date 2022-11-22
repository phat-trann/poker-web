import React from 'react';
import { Layer } from 'react-konva';
import Player from '../Player';

const Players = () => {
  return (
    <Layer>
      <Player x={250} y={170} isEmpty={false} isFocus={false} isFold={false} />
      <Player x={120} y={370} isEmpty={false} isFocus={false} isFold={true} />
      <Player
        x={180}
        y={570}
        isEmpty={false}
        isFocus={false}
        isFold={true}
      />
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

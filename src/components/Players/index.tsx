import React from 'react';
import { Layer } from 'react-konva';
import Player from '../Player';

const Players = () => {
  return (
    <Layer>
      <Player x={250} y={170} isEmpty={true} isFocus={false} />
      <Player x={120} y={370} isEmpty={false} isFocus={false} />
      <Player
        x={180}
        y={570}
        isEmpty={false}
        isFocus={false}
        moreInformation="Fold"
      />
      <Player
        x={525}
        y={650}
        isEmpty={false}
        isFocus={false}
        isCenter={true}
        moreInformation="Fold r ne"
      />
      <Player
        x={950}
        y={170}
        isLeft={false}
        isEmpty={false}
        isFocus={false}
        moreInformation="Fold r ne"
      />
      <Player x={1080} y={370} isLeft={false} isEmpty={false} isFocus={false} />
      <Player x={1020} y={570} isLeft={false} isEmpty={false} isFocus={false} />
    </Layer>
  );
};

export default Players;

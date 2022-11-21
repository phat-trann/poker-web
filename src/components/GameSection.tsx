import React, { useState } from 'react';
import TableSection from './TableSection';
import { Stage } from 'react-konva';
import Dealer from './Dealer';
import Players from './Players';
import Player from './Player';

const GameSection: React.FC = () => {
  // TODO: Using theme context for setting the table color.
  const [color, setColor] = useState('#B9925B');

  return (
    <>
      <input
        type="color"
        name=""
        id=""
        value={color}
        onChange={(e) => setColor(e?.target?.value)}
      />
      <Players>
        <Player></Player>
        <Player></Player>
        <Player></Player>
        <Player></Player>
        <Player></Player>
      </Players>
      <Stage width={1200} height={800}>
        <TableSection themeColor={color} />
        <Dealer />
      </Stage>
    </>
  );
};

export default GameSection;

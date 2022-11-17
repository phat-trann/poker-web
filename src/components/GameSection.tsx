import React, { useState } from 'react';
import TableSection from './TableSection';
import { Stage } from 'react-konva';
import Dealer from './Dealer';

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
      <Stage width={1200} height={800}>
        <TableSection themeColor={color} />
        <Dealer />
      </Stage>
    </>
  );
};

export default GameSection;

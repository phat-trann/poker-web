import React, { useState } from 'react';
import TableSection from './TableSection';

const GameSection: React.FC = () => {
  // TODO: Using theme context for setting the table color.
  const [color, setColor] = useState('#63C6FF');

  return (
    <>
      <input
        type="color"
        name=""
        id=""
        onChange={(e) => setColor(e?.target?.value)}
      />
      <TableSection themeColor={color} />
    </>
  );
};

export default GameSection;

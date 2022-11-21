import React from 'react';

const Players: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  console.log(children);
  return <div></div>;
};

export default Players;

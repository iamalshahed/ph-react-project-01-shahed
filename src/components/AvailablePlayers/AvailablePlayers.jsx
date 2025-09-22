import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div>
      <h1 className="text-center text-3xl">Available Players</h1>
    </div>
  );
};

export default AvailablePlayers;

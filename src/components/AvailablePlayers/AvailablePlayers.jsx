import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
}) => {
  const playersData = use(playersPromise);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playersData.map((player, index) => (
        <PlayerCard
          availableBalance={availableBalance}
          key={index}
          player={player}
          setAvailableBalance={setAvailableBalance}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;

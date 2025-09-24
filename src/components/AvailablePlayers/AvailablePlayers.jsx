import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playersData = use(playersPromise);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playersData.map((player, index) => (
        <PlayerCard
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
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

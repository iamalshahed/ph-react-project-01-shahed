import React from "react";
import SelectedCards from "../SelectedCards/SelectedCards";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  return (
    <div className="space-y-6">
      {purchasedPlayers.map((player, index) => (
        <SelectedCards
          removePlayer={removePlayer}
          key={index}
          player={player}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;

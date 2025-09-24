import React from "react";
import iconDelete from "./../../assets/delete.png";

const SelectedCards = ({ player, removePlayer }) => {
  const { playerImage, playerName, playingRole } = player;
  const handleRevomePlayer = () => {
    removePlayer(player);
  };

  return (
    <div className="p-6 rounded-2xl border border-neutral-900/10">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="">
            <img
              className="w-20 h-20 object-cover rounded-2xl"
              src={playerImage}
              alt="Player"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-neutral-900 text-2xl font-semibold">
              {playerName}
            </h2>
            <p className="text-neutral-900/60 text-base font-normal">
              {playingRole}
            </p>
          </div>
        </div>
        <button className="mt-4 sm:mt-0" onClick={handleRevomePlayer}>
          <img src={iconDelete} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default SelectedCards;

import React, { use } from "react";
import iconUser from "./../../assets/icon__user.png";
import iconReport from "./../../assets/repottIcon.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {playersData.map((player, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl outline outline-offset-[-1px] outline-neutral-900/10"
        >
          <div className="">
            <img
              loading="lazy"
              className="w-full h-60 object-cover rounded-2xl"
              src={player.playerImage}
              alt="Player"
            />
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="">
              <img className="" src={iconUser} alt="User Icon" />
            </div>
            <h3 className="text-neutral-900 text-xl font-semibold">
              {player.playerName}
            </h3>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="">
                <img src={iconReport} alt="Report Icon" />
              </div>
              <span className="text-neutral-500 text-base font-normal">
                {player.playerCountry}
              </span>
            </div>

            <div className="px-4 py-2 bg-neutral-900/5 rounded-lg">
              <span className="text-neutral-900 text-sm font-normal">
                {player.playingRole}
              </span>
            </div>
          </div>

          <hr className="border border-neutral-900/10 my-4" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-neutral-900 text-base font-bold">Rating</h4>
              <span className="text-neutral-900/70 text-base font-normal">
                {player.rating}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="text-neutral-900 text-base font-bold">
                {player.batingStyle}
              </h4>
              <span className="text-neutral-900/70 text-base font-normal">
                {player.bowlingStyle}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="text-neutral-900 text-base font-bold">
                Price: ${player.price}
              </h4>
              <div className="">
                <button className="px-4 py-2 rounded-lg outline outline-offset-[-1px] outline-neutral-900/10 text-neutral-900 text-sm font-normal cursor-pointer transition-all duration-150 hover:bg-neutral-900/10">
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;

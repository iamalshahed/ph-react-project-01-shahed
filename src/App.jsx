import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Preloader from "./components/Common/Preloader";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";

/**
 * fetch players data from playersData.json file
 */
const fetchPlayers = async () => {
  const res = await fetch("/playersData.json");
  return res.json();
};

/**
 * call the function on a variable and set this variable with props to <AvailablePlayers /> component
 */
const playersPromise = fetchPlayers();

function App() {
  const [toogle, setToogle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredPlayer = purchasedPlayers.filter(
      (plyr) => plyr.playerName !== p.playerName
    );
    setPurchasedPlayers(filteredPlayer);
    setAvailableBalance(
      availableBalance + parseInt(p.price.split(",").join(""))
    );
  };

  return (
    <>
      <main className="w-full relative overflow-x-hidden max-w-[1440px] mx-auto px-4">
        <Navbar availableBalance={availableBalance} />

        {/* avilable players toogle */}
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-0 items-center justify-between mt-6 mb-8">
          <h1 className="text-neutral-900 text-3xl font-bold">
            {toogle
              ? "Available Players"
              : `Selected Player (${purchasedPlayers.length}/6)`}
          </h1>
          <div className="flex items-center">
            <button
              onClick={() => setToogle(true)}
              className={`px-5 py-3.5 bg-white rounded-tl-xl rounded-bl-xl border border-r-0 border-neutral-900/10 cursor-pointer text-neutral-900/60 text-base font-normal hover:bg-neutral-900/10 ${
                toogle && "active"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setToogle(false)}
              className={`px-5 py-3.5 bg-white rounded-tr-xl rounded-br-xl border border-l-0 border-neutral-900/10 text-neutral-900/60 text-base font-normal cursor-pointer hover:bg-neutral-900/10 ${
                toogle || "active"
              }`}
            >
              Selected <span>({purchasedPlayers.length})</span>
            </button>
          </div>
        </div>

        {toogle ? (
          <Suspense fallback={<Preloader />}>
            <AvailablePlayers
              purchasedPlayers={purchasedPlayers}
              setPurchasedPlayers={setPurchasedPlayers}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              playersPromise={playersPromise}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<Preloader />}>
            <SelectedPlayers
              removePlayer={removePlayer}
              purchasedPlayers={purchasedPlayers}
            />
          </Suspense>
        )}
      </main>
      {/* Tost */}
      <ToastContainer />
    </>
  );
}

export default App;

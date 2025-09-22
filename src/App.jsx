import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Preloader from "./components/Common/Preloader";

/**
 * fetch players data from playersData.json file
 */
const fetchPlayers = async () => {
  const res = await fetch("/playersData.json");
  return res.json();
};

function App() {
  /**
   * call the function on a variable and set this variable with props to <AvailablePlayers /> component
   */
  const playersPromise = fetchPlayers();

  return (
    <>
      <main className="w-full relative overflow-x-hidden max-w-[1440px] mx-auto px-4">
        <Navbar />
        <Suspense fallback={<Preloader />}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;

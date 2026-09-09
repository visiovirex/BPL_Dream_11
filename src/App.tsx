import { Suspense, useState } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Players from "./component/Players/Players";
import type { PlayersType } from "./types/PlayerType";

const playersFetch = async (): Promise<PlayersType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const playersPromise = playersFetch();
  const [playersPromise] = useState(() => playersFetch());

  const [coin, setCoin] = useState(5000000);

  return (
    <div className="mt-2.5">
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading.........</h2>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
    </div>
  );
}

export default App;

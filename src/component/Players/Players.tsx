import { use } from "react";
import type { PlayersType } from "../../types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<PlayersType[]>;
}

function Players({ playersPromise }: PlayersProps) {
  const players = use(playersPromise);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between gap-3 mb-3">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <div>
          <button className="btn btn-success">Available</button>
          <button className="btn">Selected</button>
        </div>
      </div>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
}

export default Players;

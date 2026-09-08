
import type { PlayersType } from "../../types/PlayerType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: PlayersType[];
}

function AvailablePlayers({ players }: AvailablePlayersProps) {
  console.log(players);
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player: PlayersType, index: number) => {
        return (
            <PlayerCard key={index} player={player} ></PlayerCard>
        );
      })}
    </div>
  );
}

export default AvailablePlayers;

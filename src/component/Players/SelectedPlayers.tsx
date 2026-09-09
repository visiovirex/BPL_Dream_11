import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../types/PlayerType";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface SelectedPlayersProps {
  selectedPlayers: PlayersType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

function SelectedPlayers({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersProps) {
  if (selectedPlayers.length === 0) {
    return (
      <h2 className="font-bold text-3xl my-10 text-center ">
        NO Selected Players
      </h2>
    );
  }
  return (
    <div className="container mx-auto mt-6 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1">
      {selectedPlayers.map((player: PlayersType, index: number) => {
        return (
          <SelectedPlayerCard
            key={index}
            coin={coin}
            setCoin={setCoin}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
            player={player}
          ></SelectedPlayerCard>
        );
      })}
    </div>
  );
}

export default SelectedPlayers;

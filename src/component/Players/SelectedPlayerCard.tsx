import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../types/PlayerType";
import { TbTrash } from "react-icons/tb";

interface SelectedPlayerCardProps {
  selectedPlayers: PlayersType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  player: PlayersType;
}
function SelectedPlayerCard({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayerCardProps) {
  const handleRemovePlayer = (player: PlayersType) => {
    const restPlayer = selectedPlayers.filter(
      (selectedPlayers) => selectedPlayers.playerName != player.playerName,
    );
    setSelectedPlayers(restPlayer);
    const newPrice = coin + player.price;
    setCoin(newPrice);
  };
  return (
    <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-2xl py-2 px-4">
      <div className="flex gap-2 items-center">
        <img className="h-15 w-15" src={player.playerImage} alt="" />
        <div>
          <h2 className="font-bold text-2xl"> {player.playerName} </h2>
          <p> {player.playerType} </p>
        </div>
      </div>
      <span
        onClick={() => handleRemovePlayer(player)}
        className="text-red-500 font-bold cursor-pointer"
      >
        <TbTrash></TbTrash>
      </span>
    </div>
  );
}

export default SelectedPlayerCard;

import { FaFlag, FaRegUserCircle } from "react-icons/fa";
import type { PlayersType } from "../../types/PlayerType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface AvailablePlayerProps {
  player: PlayersType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayersType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
}

function PlayerCard({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: AvailablePlayerProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchesed succesfully.`);
    } else {
      toast.error("Coin is Low!!!:(");
    }

    // selected players
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="relative h-52 overflow-hidden bg-base-200 sm:h-60 lg:h-64">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <span className="badge badge-primary px-3 py-3 text-xs font-semibold shadow-md sm:px-4 sm:text-sm">
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Content */}
      <div className="card-body gap-3 p-4 sm:gap-4 sm:p-5">
        {/* Name & Origin */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold sm:text-xl">
            <FaRegUserCircle className="shrink-0 text-primary" />
            <span className="truncate">{player.playerName}</span>
          </h2>

          <p className="mt-1 flex items-center gap-2 text-xs text-base-content/60 sm:text-sm">
            <FaFlag className="shrink-0" />
            {player.Origin}
          </p>
        </div>

        {/* Playing Style */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-xl bg-base-200 p-3">
            <p className="mb-1 text-[10px] font-medium uppercase text-base-content/50 sm:text-xs">
              Batting
            </p>

            <p className="truncate text-sm font-semibold sm:text-base">
              {player.battingStyle}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-3">
            <p className="mb-1 text-[10px] font-medium uppercase text-base-content/50 sm:text-xs">
              Bowling
            </p>

            <p className="truncate text-sm font-semibold sm:text-base">
              {player.bowlingStyle}
            </p>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex flex-col gap-4 border-t border-base-300 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase text-base-content/50 sm:text-xs">
              Player Price
            </p>

            <p className="text-xl font-extrabold text-primary sm:text-2xl">
              ${player.price}
            </p>
          </div>

          <button
            onClick={handleSelectPlayer}
            disabled={isSelected === true ? true : false}
            className="btn btn-primary w-full rounded-xl px-4 text-sm font-semibold shadow-sm transition-all hover:scale-105 sm:w-auto sm:px-5 sm:text-base"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;

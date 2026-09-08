import { use, useState } from "react";
import type { PlayersType } from "../../types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<PlayersType[]>;
}

function Players({ playersPromise }: PlayersProps) {
  const players = use(playersPromise);

  const [buttonType, setButtonType] = useState("available");

  const handleUpdateBtnType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between gap-3 mb-3">
        <h2 className="text-3xl font-bold">
          {buttonType === "available"
            ? "Available Players"
            : "Selected Players"}
        </h2>
        <div>
          <button
            onClick={() => handleUpdateBtnType("available")}
            className={`btn rounded-r-none ${buttonType === "available" ? "btn-success" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => handleUpdateBtnType("selected")}
            className={`btn rounded-l-none ${buttonType === "selected" ? "btn-success" : ""}`}
          >
            Selected
          </button>
        </div>
      </div>
      {buttonType === "available" ? (
        <AvailablePlayers players={players}></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
}

export default Players;

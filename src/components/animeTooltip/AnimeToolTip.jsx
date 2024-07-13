import React from "react";
import "./animeTooltip.css";

const AnimeToolTip = ({ anime }) => {
  return (
    <div className="toolTip">
      <div className="tooltipSub">
        {/* <img src={anime.poster} /> */}
        <div className="tooltipContent">
          <h3>{anime.name}</h3>
          <p>{anime.description}</p>
          <p>Genre: {anime.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeToolTip;

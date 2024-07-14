import React, { useState } from "react";
import "./animeSearchCard.css";
import AnimeToolTip from "../animeTooltip/AnimeToolTip";
import { getAnimeInfo } from "../../services/animeServices";

const AnimeSearchCard = ({ anime }) => {



  

const handleDetailsPage = () => {
  window.location.href = `/anime/${anime.id}`;
};

  return (
    <div className="searchCardContainer"
   
      onClick={handleDetailsPage}
    >
      <div className="searchCard">
        <div className="rank">{anime.rating || "N/A"}</div>
        <img src={anime.poster} alt="Anime Image" />
        <div className="title">{anime.name}</div>
      </div>
    </div>
  );
};

export default AnimeSearchCard;

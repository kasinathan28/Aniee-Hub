import React, { useState } from 'react';
import './animeCard.css';
import AnimeToolTip from '../animeTooltip/AnimeToolTip';
import { getAnimeInfo } from '../../services/animeServices';

const AnimeCard = ({ anime }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [animeInfo, setAnimeInfo] = useState(null);

  const handleMouseEnter = async () => {
    setShowTooltip(true);
    const response = await getAnimeInfo(anime.id);
    setAnimeInfo(response);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="aniCardContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="leftContainer">
        <div className="rating">{anime.rank || anime.rating || "N/A"}</div>
        <div className="titleContainer">
          <p>{anime.name} ⭐</p>
        </div>
      </div>
      <div className="aniCard">
        <img src={anime.poster} alt="Anime Image" />
      </div>
      {showTooltip && animeInfo && <AnimeToolTip anime={animeInfo} />}
    </div>
  );
};

export default AnimeCard;

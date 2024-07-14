import React, { useState } from 'react';
import './animeCard.css';
import AnimeToolTip from '../animeTooltip/AnimeToolTip';
import { getAnimeInfo } from '../../services/animeServices';

const AnimeCard = ({ anime }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [animeInfo, setAnimeInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMouseEnter = async () => {
    setShowTooltip(true);
    setLoading(true);
    const response = await getAnimeInfo(anime.id);
    setAnimeInfo(response.info);
    setLoading(false);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setAnimeInfo(null);
  };

  const handleDetailsPage =()=>{
    window.location.href = `/anime/${anime.id}`
  }
  
  return (
    <div
      className="aniCardContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleDetailsPage}
    >
      <div className="leftContainer">
        <div className="rating">{anime.rank || anime.rating || "N/A"}</div>
        <div className="titleContainer">
          <p>{anime.name}</p>
        </div>
      </div>
      <div className="aniCard">
        <img src={anime.poster} alt="Anime Image" />
      </div>
      {showTooltip && <AnimeToolTip anime={animeInfo} loading={loading} />}
    </div>
  );
};

export default AnimeCard;

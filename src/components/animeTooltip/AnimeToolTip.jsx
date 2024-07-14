import React from "react";
import "./animeTooltip.css";
import Loader from "../loader";

const AnimeToolTip = ({ anime, loading }) => {
  return (
    <div className="toolTip">
      <div className="tooltipSub">
        <div className="tooltipContent">
          {loading ? (
            <Loader />
          ) : (
            anime && (
              <>
                <h3 className="title">{anime.name}</h3>
                <div className="sub">
                  <div className="rating">{anime.stats.rating}</div>
                  <div className="quality">{anime.stats.quality}</div>
                  <div className="episodes">{anime.stats.episodes.sub}</div>
                  <div className="type">{anime.stats.type}</div>
                </div>
                <p className="description">{anime.description}</p>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeToolTip;

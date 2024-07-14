import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeInfo } from "../../services/animeServices";
import "./animeDetail.css";
import Header from "../../components/header/header";

function AnimmeDetails() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState({ info: {}, moreInfo: {} });

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await getAnimeInfo(id);
        setAnimeData(response);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };
    fetchAnimeDetails();
  }, [id]);

  const mainData = animeData.info;
  const extra = animeData.moreInfo;

  return (
    <div
      className="animeDetails"
      style={{ backgroundImage: `url(${mainData.poster})` }}
    >
      <Header />
      <div className="content">
        <div className="subContent">
          <div className="left">
            <div>
              <img src={mainData.poster} alt={mainData.name} />
            </div>

            <div className="textContent">
              <p className="title">
                Home {"\u00B7"} {mainData?.stats?.type} {"\u00B7"}{" "}
                {mainData.name}
              </p>
              <h1>{mainData.name}</h1>
              <div className="animeFlex">
                <div className="rating">{mainData?.stats?.rating}</div>
                <div className="quality">{mainData?.stats?.quality}</div>
                <div className="episodes">{mainData?.stats?.episodes?.sub}</div>
                <div className="episodes">{mainData?.stats?.episodes?.sub}</div>
              </div>
              <p>{mainData.description}</p> 
            </div>
          </div>
          {extra ? (
            <div className="extra">
              <p>
                <strong>Japanese:</strong> {extra?.japanese}
              </p>
              <p>
                <strong>Episodes:</strong> {mainData?.stats?.episodes?.sub}
              </p>
              <p>
                <strong>Duration:</strong> {extra?.duration}
              </p>
              <p>
                <strong>Synonyms:</strong> {extra?.synonyms}
              </p>
              <p>
                <strong>Aired at:</strong> {extra?.aired}
              </p>
              <p>
                <strong>Premiered:</strong> {extra?.premiered}
              </p>
              <p>
                <strong>Status:</strong> {extra?.status}
              </p>
              <p>
                <strong>MAL Score:</strong> {extra?.malscore}
              </p>
              <div className="flexbox">
                <p>
                  <strong>Genres:</strong>
                </p>
                {extra?.genres?.map((genre) => (
                  <p className="genre" key={genre}>
                    {genre}
                  </p>
                ))}
              </div>
              <p>
                <strong>Studio:</strong> {extra?.studios}
              </p>
              <div className="flexbox no-border">
                <p>
                  <strong>Producers:</strong>
                </p>
                {extra?.producers?.map((producer) => (
                  <p className="producers" key={producer}>
                    {producer}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            "No Data Available"
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimmeDetails;

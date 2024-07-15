import React, { useEffect, useState } from "react";
import "./index.css";
import IndexBanner from "../../components/indexBanner/IndexBanner";
import Header from "../../components/header/header";
import {
  fetchAnimeNews,
  getUpcomingAnime,
  SearchAnime,
  topSearches,
  trendingAnimes,
} from "../../services/animeServices";
import AnimeContainer from "../../components/animeContainer/animeContainer";
import LoadingPage from "../../components/loadingPage/LoadingPage";
import TrendingPosts from "../../components/trendingPost/TrendingPosts";

function Index() {
  const [mainLoading, setMainLoading] = useState(true);
  const [top, setTop] = useState({});
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState({});
  const [loading, setLoading] = useState(false);
  const [animeResult, setAnimeResult] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTop = await topSearches();
        const responseUpcoming = await getUpcomingAnime();
        const responseTrending = await trendingAnimes();
        const responseNews = await fetchAnimeNews();

        setTop(responseTop);
        setUpComing(responseUpcoming);
        setTrending(responseTrending);
        setNews(responseNews);
        setMainLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    setQuery(query);
    setLoading(true);
    try {
      const response = await SearchAnime(query);
      setAnimeResult(response.animes);
    } catch (error) {
      console.error("Error in index while searching...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {mainLoading ? (
        <LoadingPage />
      ) : (
        <div className="indexPage">
          <Header />
          <IndexBanner topSearch={top} onSearch={handleSearch} />
          <AnimeContainer
            searchQuery={query}
            trending={trending}
            animeResult={animeResult}
            loading={loading}
            upComing={upComing}
          />
          <TrendingPosts news={news} />
        </div>
      )}
    </>
  );
}

export default Index;

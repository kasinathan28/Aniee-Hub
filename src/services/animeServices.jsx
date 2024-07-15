import axios from "axios";
// Update the IP address with your machine's local network IP
const localNetworkIP = "192.168.1.5"; // Replace with your actual IP address

const isLocalhost = window.location.hostname === "localhost";
const base_url = isLocalhost
  ? "http://localhost:4000"
  : `http://${localNetworkIP}:4000`;

const newsAPI_URL = "https://api.jikan.moe/v4/anime/1/news";

// Api for ogetting top Searched Anime
export const topSearches = async () => {
  const response = await axios.get(`${base_url}/anime/home`);
  return response.data.top10Animes.today.slice(0, 5);
};

// Api for fetching upcomming anime
export const getUpcomingAnime = async () => {
  const response = await axios.get(`${base_url}/anime/home`);
  return response.data.topUpcomingAnimes;
};

// Api for fetching trending anime
export const trendingAnimes = async () => {
  try {
    const response = await axios.get(`${base_url}/anime/home`);
    const top10Animes = response.data.trendingAnimes;
    return top10Animes.slice(0, 50);
  } catch (error) {
    console.error("Error fetching trending animes:", error);
  }
};

// Api for searching anime
export const SearchAnime = async (title) => {
  try {
    if (!title) {
      throw new Error("Title parameter is required");
    }

    const response = await axios.get(
      `${base_url}/anime/search?q=${title}&page=1`
    );

    return response.data;
  } catch (error) {
    console.error("Error while searching:", error.message);
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    }
  }
};

// fetching info of the anime
export const getAnimeInfo = async (id) => {
  try {
    if (!id) {
      throw new Error("Id parameter is required");
    }
    const response = await axios.get(`${base_url}/anime/info?id=${id}`);
    return response.data.anime;
  } catch (error) {
    console.error("Error while fetching anime info:", error.message);
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    }
  }
};

// Fetching anime News
export const fetchAnimeNews =  async () => {
  try {
    const response = await axios.get(newsAPI_URL);
    return response.data.data

  } catch (error) {
    console.error('Error fetching anime news:', error);
    throw error;
  }
};


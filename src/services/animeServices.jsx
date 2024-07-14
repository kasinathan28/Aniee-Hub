import axios from "axios";
// Update the IP address with your machine's local network IP
const localNetworkIP = "192.168.1.5"; // Replace with your actual IP address

const isLocalhost = window.location.hostname === "localhost";
const base_url = isLocalhost ? "http://localhost:4000" : `http://${localNetworkIP}:4000`;

export const topSearches = async () => {
  const response = await axios.get(`${base_url}/anime/home`);
  return response.data.top10Animes.today.slice(0, 3);
};

export const trendingAnimes = async () => {
  try {
    const response = await axios.get(`${base_url}/anime/home`);
    const top10Animes = response.data.trendingAnimes;
    return top10Animes.slice(0, 50);
  } catch (error) {
    console.error("Error fetching trending animes:", error);
  }
};

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

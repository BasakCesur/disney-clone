import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "74283a575567fbf1b45545be3df69f5d";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default {
  getTrendingVideos,
};

import axios from "axios";

const KEY = "AIzaSyC2drxrWVfqnXMHqPiEJhOyS_d14woNkTE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

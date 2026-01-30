import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username, location = "", minRepos = "") => {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);

  return response.data.items;
};

import axios from "axios";

/**
 * Fetch GitHub users using advanced search criteria
 * @param {Object} params
 * @param {string} params.username
 * @param {string} params.location
 * @param {number} params.minRepos
 */
export const fetchUserData = async ({
  username = "",
  location = "",
  minRepos = 0,
}) => {
  let query = "";

  if (username) {
    query += `${username}`;
  }

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url);

  return response.data;
};

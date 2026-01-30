import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUserData(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 mb-6"
      >
        <h2 className="text-xl font-bold mb-4">GitHub User Advanced Search</h2>

        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Location (e.g. Ghana)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-3"
            />
            <h3 className="font-semibold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

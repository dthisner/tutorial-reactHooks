import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchInputRef = useRef();

  // useEffect(() => {
  //   Axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks").then(
  //     (response) => {
  //       console.log(response);
  //       setResults(response.data.hits);
  //     }
  //   );
  // }, []);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);

    try {
      const response = await Axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(response.data.hits);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  const handleSearch = (event) => {
    event.preventDefault();

    getResults();
  };

  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest shadow-lg rounded">
      <h1 className="text-grey-darkest font-thin">Hooks News</h1>
      <form onSubmit={handleSearch} className="mb-2">
        <input
          value={query}
          type="search"
          onChange={(event) => setQuery(event.target.value)}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button className="bg-orange rounded m-1 p-1" type="submit">
          Search
        </button>
        <button
          className="bg-teal text-white rounded m-1 p-1"
          type="button"
          onClick={handleClearSearch}
        >
          Clear
        </button>
        {error && (
          <>
            <h3>Error occured!</h3>{" "}
            <div className="text-red font-bold"> {error.message}</div>
          </>
        )}
      </form>
      {loading ? (
        <div className="font-bold  text-orange-dark"> Loading Results...</div>
      ) : (
        <ul className="list-reset leading-normal">
          {results.map((result) => (
            <li key={result.objectID}>
              <a
                className="text-indigo-dark hover:text-indigo-darkest"
                href={result.url}
              >
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

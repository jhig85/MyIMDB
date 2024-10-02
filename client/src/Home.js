import React, { useEffect, useState } from "react";
import HomeStyles from "./Home.styled";
const Home = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const imdbUrl = "https://api.themoviedb.org/3";

  const apiCall = () => {
    fetch("http://localhost:8081")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/movielist");
      const jsonData = await response.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <HomeStyles>
      <h1>{message}</h1>
      <button onClick={apiCall}>Make API Call</button>
      <div className="movie-list">
        {data &&
          data.map((item) => (
            <div className="movie" key={item.id}>
              <img src={imdbUrl + item.poster_path} alt={item.overview} />
              <h4>{item.title}</h4>
              <p>{item.overview}</p>
            </div>
          ))}
      </div>
    </HomeStyles>
  );
};

export default Home;

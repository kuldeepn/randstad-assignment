import React, { useEffect, useState } from "react";
import "./FetchAlbums.css";

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchAlbums();
  }, []);

  const FetchAlbums = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="movie-list">
      {data.map((item) => (
        <div className="movie" key={item.id}>
          <h1>{item.userId}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;

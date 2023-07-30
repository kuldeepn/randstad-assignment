import "./App.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import TitleList from "./TitleList";
import FetchAlbums from "./FetchAlbums";

function App() {
  const [isUserList, setUserList] = useState(true);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const jsonData = await response.json();
  //     setUsers(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

  const handleTitleList = () => {
    setUserList(false);
  };

  return (
    <div>
      <Header></Header>

      <div className="card-container">
        <FetchAlbums />
      </div>
    </div>
  );
}

export default App;

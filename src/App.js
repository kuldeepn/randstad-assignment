import "./App.css";
import Header from "./Header";
import { createContext, useEffect, useMemo, useState } from "react";
import TitleList from "./TitleList";
import FetchAlbums from "./FetchAlbums";
export const CountContext = createContext({
  countValue: '',
  setCountValue:()=>''
  
});

export const BbackButtonContext = createContext({
  titleTrue: false,
  settitleTrue: () => false,
});

function App() {
  const [isUserList, setUserList] = useState(true);
  const [countValue, setCountValue] = useState(0);
  const [titleTrue, setTitleTrue] = useState(false);
  const countIndexValue = useMemo(() => ({ countValue, setCountValue }), [countValue]);
  const titleBooleanValue = useMemo(
    () => ({ titleTrue, setTitleTrue }),
    [titleTrue]
  );

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
    <BbackButtonContext.Provider value={titleBooleanValue}>
      <CountContext.Provider value={countIndexValue}>
        <div>
          <Header></Header>

          <div className="card-container">
            <FetchAlbums />
          </div>
        </div>
      </CountContext.Provider>
    </BbackButtonContext.Provider>
  );
}

export default App;

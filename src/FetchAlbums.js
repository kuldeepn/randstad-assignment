import React, { useState, useEffect, useContext } from "react";
import "./FetchAlbums.css";
import TitleList from "./TitleList";
import { CountContext,BbackButtonContext } from "./App";

const FetchAlbums = ({ username }) => {
  const [albums, setAlbums] = useState([]);
  const [key, setKey] = useState(0);
  const [users, setUsers] = useState([]);
  const [myId, setMyId] = useState();
  const[indexValue, setIndexValue]=useState(0)
  // const [titleTrue, setTitleTrue] = useState(false);
  const [repetition, setRepetition] = useState([]);
  const { countValue, setCountValue } = useContext(CountContext);
  const { titleTrue, setTitleTrue } = useContext(BbackButtonContext);
  
  console.log('users', users);
  useEffect(() => {
    fetchUsers();
    fetchUsers2();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const jsonData = await response.json();
      console.log("jsonData", jsonData);
      for (let i = 0; i < jsonData.length; i++) {
        if (repetition.find((o) => o.userId == jsonData[i].userId)) {
          // return;
          console.log("values repetating...!");
        } else {
          repetition.push(jsonData[i]);
          // setAlbums(jsonData);
          setKey(0);

        }

      }
      setCountValue(repetition.length);

    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUsers2 = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleTitleList = (e, id,i) => {
    console.log("it is clicked..!", id);
    setMyId(id);
    setTitleTrue(true);
    setIndexValue(i);
    setKey(Math.random());
    
  };

  return (
    <>
      {/* <div className="item-count">{countUnseenItems()}</div> */}
      <div>
        {titleTrue ? (
          <TitleList userid={myId} />
        ) : (
          <div>
            <div className="card-container">
              {repetition.map((data, index) => {
                return (
                  <div>
                    <div className="item-count">
                      {index == indexValue ? (
                        <p>{countValue}</p>
                      ) : (
                        <p>{repetition.length}</p>
                      )}
                    </div>
                    <div key={index} className="card">
                      <h2
                        className="card-label"
                        onClick={(e) => handleTitleList(e, data.userId, index)}
                      >
                        {data.userId}
                      </h2>
                    </div>
                  </div>
                );
              })}

              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FetchAlbums;

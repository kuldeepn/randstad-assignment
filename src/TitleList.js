import { useState, useEffect, useContext } from "react";
import { CountContext, BbackButtonContext } from "./App";
import "./TitleList.css";

const TitleList = ({ userid }) => {
  const [items, setItems] = useState([]);
  const [seenItems, setSeenItems] = useState([]);
  // const [count, setCount] = useState();
  const { countValue, setCountValue } = useContext(CountContext);
  const { titleTrue, setTitleTrue } = useContext(BbackButtonContext);

  // console.log('data',items);
  useEffect(() => {
    fetchAlbums();
    // console.log(userid);
  }, []);

  const fetchAlbums = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userid}`
      );
      const jsonData = await response.json();
      //  const uniqueUserData = removeDuplicateIDs(jsonData);
      // setData(uniqueUserData);
      // console.log(userid, "MySameID");
      setItems(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleItemClick = (itemId) => {
    seenItems.push(itemId);

  };

  const countUnseenItems = (e,index) => {
    setCountValue(items.length - seenItems.length);
    // setCountValue(count);
    // console.log(items.length - seenItems.length);
    
  };
// console.log("count", count);

  const handleSetTitle = () => {
    setTitleTrue(false);
    // console.log('back');
  };
  return (
    <div>
    <button onClick={handleSetTitle}>Back</button>
    <div className="item-container">
      
      {items.length > 0 && (
        <div className="items-list">
          {items.map((item,index) => (
            <div key={index} onClick={(e)=>countUnseenItems(e,index)}>
              <div
                key={item.id}
                className={`item ${seenItems.includes(item.id) ? "seen" : ""}`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
      </div>
  );
};

export default TitleList;

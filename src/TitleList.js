import { useState, useEffect } from "react";

const TitleList = ({ userid, titleTrue }) => {
  const [items, setItems] = useState([]);
  const [seenItems, setSeenItems] = useState([]);
  console.log('data',items);
  useEffect(() => {
    fetchAlbums();
    console.log(userid);
  }, []);

  const fetchAlbums = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userid}`
      );
      const jsonData = await response.json();
      //  const uniqueUserData = removeDuplicateIDs(jsonData);
      // setData(uniqueUserData);
      console.log(userid, "MySameID");
      setItems(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleItemClick = (itemId) => {
    setSeenItems([...seenItems, itemId]);
  };



  const handleSetTitle = () => {
    titleTrue = false;
    console.log("false");
  };
  return (
    <div>
      <div onClick={handleSetTitle}>Back</div>
      {items.length > 0 && (
        <div className="items-list" >
          {items.map((item) => (
            <div>
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
  );
};

export default TitleList;

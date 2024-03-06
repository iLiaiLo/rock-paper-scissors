import React,{useState,useEffect} from "react";
import data from "./Data";


function App() {

  const [clicked, setClicked] = useState(false);
  const [myScore, setMyScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [myItem, setMyItem] = useState({});
  const [computerItem, setComputerItem] = useState({});
  const [text,setText]=useState("");

  useEffect(() => {
    determineScore(myItem, computerItem);
  }, [myItem,computerItem]);

  const handleClick = (item) => {
    setMyItem(item);
    setClicked(true);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const num = Math.floor(Math.random() * data.length);
    setComputerItem(data[num]);
  };

  const determineScore = (myItem, computerItem) => {
    if (myItem.name === computerItem.name) {
      setText("It's a tie");
    } else if (
      (myItem.name === "rock" && computerItem.name === "scissors") ||
      (myItem.name === "paper" && computerItem.name === "rock") ||
      (myItem.name === "scissors" && computerItem.name === "paper")
    ) {
      setMyScore((prevScore) => prevScore + 1);
      setText("Player wins");
    } else {
      setComputerScore((prevScore) => prevScore + 1);
      setText("Computer wins");
    }
  };

  return (
    <div>
        
    {clicked && <h2 className="textInfo">{text}</h2>}
      

    <div className="resultContainer">
     
        <img
          src={myItem.source}
          style={{ transform: "rotateY(180deg) rotate(-90deg)",display:clicked?"inline-block":"none" }}
          alt="alternate"
          width="50"
        />
      
      
        <img
          src={computerItem.source}
          style={{ transform: "rotate(-90deg)",display:clicked?"inline-block":"none"  }}
          alt="alternate"
          width="50"
        />

     
      </div>

     <div className="scoreContainer">

    <h2>{myScore}</h2>
    <h2>{computerScore}</h2>

      </div>

    <div className="container">
      {data.map((item, index) => (
        <img
          key={index}
          src={item.source}
          onClick={() => handleClick(item)}
          alt="alternative"
          width="50"
          height="50"
        />
      ))}
    </div>

    </div>

  );
}

export default App;

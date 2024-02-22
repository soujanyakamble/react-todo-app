import React from "react";
import axios from 'axios';
import { useState } from "react";

 function Gamepage() {
  const [num, setNum] = useState(0);
  const [number, setNumber] = useState('');
  const [guess, setGuess] = useState('');
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1000, 9000));
  };

  const [scores, setScores] = useState([]);

  const fetchScores = async () => {
    const response = await axios.get('/api/scores');
    setScores(response.data);
  };

  const handleGuess = (event) => {
    event.preventDefault();
    let plus = 0;
    let minus = 0;
    for (let i = 1000; i < 9999; i++) {
      if (guess[i] === number[i]) {
        plus++;
      } else if (number.includes(guess[i])) {
        minus++;
      }
    }
}
  


  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
        <form onSubmit={handleGuess}>
          <h2>Number is: {num}</h2>
          <button
            onClick={handleClick}
            style={{
              color: "white",
              backgroundColor: "#40679e",
              height: "35px",
              width: "130px",
            }}
          >
            Generate
          </button>
          <label>
          Guess:
          <input type="text" value={guess} onChange={(event) => setGuess(event.target.value)} />
        </label>
        <button type="submit" style={{
              color: "white",
              backgroundColor: "#40679e",
              height: "35px",
              width: "130px",
            }}>Submit Guess</button>
        </form>
        {/* <p>Score: {score}</p>
      {/* <p>Guesses: {guesses}</p> */}
        </div> 
      </div>
    </div>
  );
}
export default Gamepage;
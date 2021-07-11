import React from "react";
import styled from "@emotion/styled";
import "./App.css";
import Board from "./scenes/Board";

const StyledHeading = styled.h1`
  color: #ff6d00;
  font-family: Creepy, serif;
  font-weight: normal;
  text-align: center;
  font-size: 6em;
`;

function App() {
  return (
    <div className="App">
      <StyledHeading>Memory - King</StyledHeading>
      <Board />
      {/* <div className="overlay-text visible">
        Click to Start
      </div>
      <div id="game-over-text" className="overlay-text">
        GAME OVER
        <span className="overlay-text-small">Click to Restart</span>
      </div> */}
      {/* <div id="victory-text" className="overlay-text">
        VICTORY
        <span className="overlay-text-small">Click to Restart</span>
      </div> */}

      {/* <div className="game-container">
        <div className="game-info-container">
          <div className="game-info">
            Time <span id="time-remaining">100</span>
          </div>
          <div className="game-info">
            Flips <span id="flips">0</span>
          </div>
        </div>
        <div className="card">
          <div className="card-back card-face">
            <img className="cob-web cob-web-top-left" alt="icon" src={Cobweb} />
            <img className="cob-web cob-web-top-right" src={Cobweb} alt="icon" />
            <img className="cob-web cob-web-bottom-left" src={Cobweb} alt="icon" />
            <img className="cob-web cob-web-bottom-right" src={Cobweb} alt="icon" />
            <img className="spider" src={Spider} alt="icon" />
          </div>
          <div className="card-front card-face">
            <img className="cob-web cob-web-top-left" alt="icon" src={CobwebGrey} />
            <img className="cob-web cob-web-top-right" src={CobwebGrey} alt="icon" />
            <img className="cob-web cob-web-bottom-left" src={CobwebGrey} alt="icon" />
            <img className="cob-web cob-web-bottom-right" src={CobwebGrey} alt="icon" />
            <img className="spider" src={Bat} alt="icon" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import styled from "@emotion/styled";
import "./App.css";
import Board from "./scenes/Board";
import CustomButton from "./components/CustomButton";
import "antd/dist/antd.css";
// import Routing from "./router";

const StyledHeading = styled.h1`
  color: #ff6d00;
  font-family: Creepy, serif;
  font-weight: normal;
  text-align: center;
  font-size: 3.5em;
  margin-bottom: 8px;
`;

const Wrapper = styled.section``;
const App = () => {
  const [start, setStart] = useState<Boolean>(false);

  const handleStartGame = () => {
    setStart(true);
  };
  return (
    //<Routing>
    <div className="App">
      <Wrapper>
        <StyledHeading>Memory - King</StyledHeading>
        {start ? (
          <Board />
        ) : (
          <>
            <CustomButton onClick={handleStartGame}>
              Start The Game
            </CustomButton>
          </>
        )}
      </Wrapper>
    </div>
    //</Routing>
  );
};

export default App;

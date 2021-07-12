import React, { useState } from "react";
import styled from "@emotion/styled";
import CustomButton from "../components/CustomButton";
import Board from "./Board";

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
    <div className="App">
      <Wrapper>
        <StyledHeading>Memory - King</StyledHeading>
        <CustomButton onClick={handleStartGame}>Start The Game</CustomButton>
        {start && <Board />}
      </Wrapper>
    </div>
    //</Routing>
  );
};

export default App;

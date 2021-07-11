// import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
// import { useDispatch, useSelector } from "react-redux";
// import { getCards } from "../redux/ducks/cards";
// import Card from "./Card";

// const StyledResult = styled.div`
//   grid-column: 1 / -1;
//   display: flex;
//   justify-content: space-between;
// `;

// const Wrapper = styled.section`
//   margin: 50px auto;
//   display: grid;
//   grid-template-columns: repeat(4, auto);
//   grid-gap: 10px;
//   justify-content: center;
// `;
// const StyledInfo = styled.div`
//   color: #ffbb89;
//   font-size: 4em;
// `;
// const Board = () => {
//   const dispatch = useDispatch();
//   const [openedCard, setOpenedCard]: any = useState([]);
//   const [matched, setMatched]: any = useState([]);

//   useEffect(() => {
//     dispatch(getCards());
//   }, [dispatch]);

//   const totalCards = useSelector((state: any) => state.card.card);
//   const pairOfCards = [...totalCards, ...totalCards];

//   useEffect(() => {
//     if (openedCard < 2) return;

//     const firstMatched = pairOfCards[openedCard[0]];
//     const secondMatched = pairOfCards[openedCard[1]];

//     if (secondMatched && firstMatched.id === secondMatched.id) {
//       setMatched([...matched, firstMatched.id]);
//     }

//     if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 500);
//   }, [openedCard, pairOfCards]);

//   console.log(openedCard, "m");
//   return (
//     <>
//       <StyledResult>
//         <StyledInfo className="info">
//           Time <span>100</span>
//         </StyledInfo>
//         <StyledInfo className="info">
//           Flips <span>0</span>
//         </StyledInfo>
//       </StyledResult>
//       <Wrapper>
//         {pairOfCards.map((item: any, idx: number) => {
//           return (
//             <Card
//               data={item}
//               key={idx}
//               idx={idx}
//               setOpenedCard={setOpenedCard}
//               openedCard={openedCard}
//               matched={matched}
//             />
//           );
//         })}
//       </Wrapper>
//     </>
//   );
// };

// export default Board;

import styled from "@emotion/styled";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import conSecMin from "../components/conSecMin";
import { getCards } from "../redux/ducks/cards";
import Card from "./Card";

const StyledResult = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
`;

const StyledInfo = styled.div`
  color: #ffbb89;
  font-size: 1.5em;
`;

const StyledLoading = styled.h1`
  font-size: 100px;
`;
const Board = () => {
  const dispatch = useDispatch();
  const [flips, setFlips] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const totalCards = useSelector(({ cards }: any) => cards);
  useEffect(() => {
    setTimeout(() => {
      setTimer((prev: number) => prev + 1);
    }, 1000);
  }, [timer]);

  return (
    <>
      <StyledResult>
        <StyledInfo className="info">
          Time <span>{conSecMin(timer)}</span>
        </StyledInfo>
        <StyledInfo className="info">
          Flips <span>{flips}</span>
        </StyledInfo>
      </StyledResult>
      {totalCards.loading ? (
        <StyledLoading>loading</StyledLoading>
      ) : (
        <Card totalCards={totalCards.cards} setFlips={setFlips} />
      )}
    </>
  );
};

export default Board;

import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  width: 750px;
  height: 130px;
  /* background-color: #fff; */
  border-radius: 30px;
  margin: 30px 0;
  box-sizing: border-box;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* box-shadow: 5px 5px 10px gray; */
`;

const Focus = styled.span`
  font-size: 35px;
`;

const SummaryLeft = styled.div`
  color: #202632;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SummaryRight = styled.div`
  color: #202632;
  font-size: 25px;
  font-weight: 700;
  margin-left: 200px;
`;

const Summary = () => {
  return (
    <>
      <SummaryContainer>
        <SummaryLeft>
          <Focus>" 6월 "</Focus> 한 달 동안 지출한
        </SummaryLeft>
        <SummaryRight>
          총 금액은
          <Focus> 💸 200,000 </Focus>원 입니다.
        </SummaryRight>
      </SummaryContainer>
    </>
  );
};

export default Summary;

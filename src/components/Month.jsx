import React from "react";
import styled from "styled-components";

const MonthContainer = styled.div`
  width: 750px;
  height: 250px;
  background-color: #fff;
  border-radius: 50px;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 40px 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const MonthBox = styled.div`
  width: 95px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #7299d0;
  border-radius: 20px;
  color: #202632;
  cursor: pointer;
  &:hover {
    background: #7299d0;
    color: white;
    transition: 0.5s;
  }
`;
const Month = () => {
  const MonthList = [
    "1 월",
    "2 월",
    "3 월",
    "4 월",
    "5 월",
    "6 월",
    "7 월",
    "8 월",
    "9 월",
    "10 월",
    "11 월",
    "12 월",
  ];
  return (
    <>
      <MonthContainer>
        {MonthList.map((month, idx) => {
          return <MonthBox key={idx}>{month}</MonthBox>;
        })}
      </MonthContainer>
    </>
  );
};

export default Month;

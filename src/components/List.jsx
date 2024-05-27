import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  position: relative;
  width: 750px;
  height: 500px;
  background-color: #fff;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  padding: 40px 0;
`;

const ListInner = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
  padding: 10px;
`;

const ListBox = styled.div`
  width: 650px;
  height: 80px;
  min-height: 80px;
  background-color: #f5f7f8;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 5px 5px 10px gray;
  margin-bottom: 15px;
  color: #202632;
  font-size: 18px;
  font-weight: 600;
`;

const List = () => {
  return (
    <>
      <ListContainer>
        <ListInner>
          <ListBox>여행가기 ₩ 200,000</ListBox>
          <ListBox>여행가기 ₩ 200,000</ListBox>
          <ListBox>여행가기 ₩ 200,000</ListBox>
          <ListBox>여행가기 ₩ 200,000</ListBox>
          <ListBox>여행가기 ₩ 200,000</ListBox>
        </ListInner>
      </ListContainer>
    </>
  );
};

export default List;

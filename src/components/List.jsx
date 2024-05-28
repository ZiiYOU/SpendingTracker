import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

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
  max-height: 100px;
  background-color: #f5f7f8;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 5px 5px 10px gray;
  margin-bottom: 15px;
  color: #202632;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    font-size: 20px;
    transition: 0.5s;
  }
`;

const IconBox = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

const DateBox = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 8px;
`;

const DescriptionBox = styled.div`
  margin-bottom: 20px;
  width: 440px;
`;

const List = ({
  list,
  date,
  setList,
  filteredList,
  navigate,
  selectedMonth,
  setSelectedMonth,
}) => {
  const GotoDetailedPage = () => {
    navigate("detailed");
  };

  const GetSpendingList = () => {
    const getSpendingList = JSON.parse(localStorage.getItem("spending list"));
    setList(getSpendingList);
  };

  useEffect(() => {
    GetSpendingList();
  }, []);

  return (
    <>
      <ListContainer>
        <ListInner>
          {filteredList.map((li, idx) => {
            return (
              <ListBox key={idx} onClick={GotoDetailedPage}>
                <IconBox>{li.item.split(" ")[0]}</IconBox>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <DateBox>{li.date}</DateBox>
                  <DescriptionBox>{li.description}</DescriptionBox>
                </div>
                <div>{li.price}</div>
              </ListBox>
            );
          })}
        </ListInner>
      </ListContainer>
    </>
  );
};

export default List;

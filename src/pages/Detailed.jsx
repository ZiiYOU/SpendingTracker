import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SelectedSpending from "../components/SelectedSpending";
import Modify from "../components/Modify";

const SpendingBox = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  gap: 65px;
  justify-content: center;
  align-items: center;
`;

const Detailed = ({ list, setList }) => {
  const listId = useParams();

  return (
    <>
      <SpendingBox>
        <SelectedSpending list={list} listId={listId} />
        <Modify listId={listId} list={list} setList={setList} />
      </SpendingBox>
    </>
  );
};

export default Detailed;

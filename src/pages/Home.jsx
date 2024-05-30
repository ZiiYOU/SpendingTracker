import React from "react";
import styled from "styled-components";
import Month from "../components/Month";
import Summary from "../components/Summary";
import List from "../components/List";
import Addition from "../components/Addition";
import Modal from "../components/Modal";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SpendingContext } from "../context/spendingListContext";

const Sticky = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Inner = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  const [date, setDate] = useState(0);
  const [item, setItem] = useState("🎂 식비");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("");
  const navigate = useNavigate();
  const { list, setList } = useContext(SpendingContext);

  let filteredList = [];
  if (list.length !== 0) {
    filteredList = list.filter(
      (li) => Number(selectedMonth) === Number(li.date.split("-")[1])
    );
  }

  return (
    <Sticky>
      <Inner>
        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Summary selectedMonth={selectedMonth} filteredList={filteredList} />
        <List filteredList={filteredList} navigate={navigate} />
        <Modal
          date={date}
          item={item}
          description={description}
          price={price}
          setDate={setDate}
          setItem={setItem}
          setDescription={setDescription}
          setPrice={setPrice}
          navigate={navigate}
        />
      </Inner>
      <Addition />
    </Sticky>
  );
};

export default Home;

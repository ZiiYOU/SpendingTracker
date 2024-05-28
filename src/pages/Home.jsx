import React from "react";
import styled from "styled-components";
import Month from "../components/Month";
import Summary from "../components/Summary";
import List from "../components/List";
import Addition from "../components/Addition";
import Modal from "../components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [date, setDate] = useState("yyyy-MM-dd");
  const [item, setItem] = useState("🎂 식비");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [list, setList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const navigate = useNavigate();

  let filteredList = list.filter(
    (li) => Number(selectedMonth) === Number(li.date.split("-")[1])
  );

  return (
    <Sticky>
      <Inner>
        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Summary selectedMonth={selectedMonth} filteredList={filteredList} />
        <List
          list={list}
          date={date}
          setList={setList}
          filteredList={filteredList}
          navigate={navigate}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Modal
          date={date}
          item={item}
          description={description}
          price={price}
          list={list}
          setDate={setDate}
          setItem={setItem}
          setDescription={setDescription}
          setPrice={setPrice}
          setList={setList}
          navigate={navigate}
        />
      </Inner>
      <Addition />
    </Sticky>
  );
};

export default Home;

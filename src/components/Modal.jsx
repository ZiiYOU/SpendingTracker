import React, { useContext, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { SpendingContext } from "../context/spendingListContext";
import { MonthContext } from "../context/selectedMonthContext";

const ModalContainer = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 50px;
`;

const Inputs = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #6592d1;
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ItemSelect = styled.select`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #6592d1;
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const ModalButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 15px;
  box-sizing: border-box;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  background-color: #6592d1;
  color: #fff;
  &:hover {
    background-color: #eeecec;
    color: black;
    transition: 0.5s;
  }
`;

const Modal = () => {
  const { list, setList } = useContext(SpendingContext);
  const [date, setDate] = useState(0);
  const [item, setItem] = useState("🎂 식비");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const { selectedMonth, setSelectedMonth } = useContext(MonthContext);
  const navigate = useNavigate();

  const AddList = () => {
    if (!date) {
      alert("지출한 날짜를 입력해주세요!");
      return;
    }
    if (!description.trim()) {
      alert("지출한 내용에 대해 입력해주세요!");
      return;
    }
    if (!price) {
      alert("지출한 금액을 입력해주세요!");
      return;
    }

    setList((prev) => [
      ...prev,
      {
        id: uuid(),
        date: date,
        item: item,
        description: description,
        price: price,
      },
    ]);

    const spendingList = [
      ...list,
      {
        id: uuid(),
        date: date,
        item: item,
        description: description,
        price: price,
      },
    ];
    setLocalStorage(spendingList);
    ScrollToMain();

    setSelectedMonth(Number(date.split("-")[1]));
    setDate(0);
    setItem("🎂 식비");
    setDescription("");
    setPrice(0);
  };

  const setLocalStorage = (spending) => {
    localStorage.setItem("spending list", JSON.stringify(spending));
  };

  const ScrollToMain = () => {
    window.scrollTo({
      top: -100,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ModalContainer>
      <Inputs
        type="date"
        onChange={(event) => {
          setDate(event.target.value);
        }}
        value={date}
      ></Inputs>
      <ItemSelect
        onChange={(event) => {
          setItem(event.target.value);
        }}
        value={item}
      >
        <option>🎂 식비</option>
        <option>✈️ 여행 경비</option>
        <option>🛍️ 쇼핑</option>
        <option>🎁 친구 선물</option>
        <option>✨ 기타</option>
      </ItemSelect>
      <Inputs
        type="text"
        placeholder="내용"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      ></Inputs>
      <Inputs
        type="number"
        placeholder="지출 금액"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
        value={price}
      ></Inputs>
      <ButtonContainer>
        <ModalButton onClick={AddList}>등록</ModalButton>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default Modal;
export { ModalContainer, Inputs, ItemSelect, ButtonContainer, ModalButton };

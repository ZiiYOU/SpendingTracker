import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ListBox = styled.div`
  width: 650px;
  height: 80px;
  min-height: 80px;
  max-height: 100px;
  background-color: #fff;
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
  margin-top: 50px;
  cursor: pointer;
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
  margin: 50px 0;
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

const Detailed = ({ list, setList }) => {
  const listId = useParams();
  const dateRef = useRef();
  const itemRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const navigate = useNavigate();
  let detailedList = list.find((li) => Number(li.id) === Number(listId.listId));

  const DeleteButton = () => {
    if (confirm("이 항목을 삭제하시겠습니까 ?")) {
      const DeletedList = list.filter(
        (li) => Number(li.id) !== Number(listId.listId)
      );

      setList(DeletedList);
      localStorage.setItem("spending list", JSON.stringify(DeletedList));
      navigate("/");
    }
  };

  const ModifyButton = () => {
    const dateVal = dateRef.current.value;
    const itemVal = itemRef.current.value;
    const desVal = descriptionRef.current.value;
    const priceVal = priceRef.current.value;

    if (!dateVal) {
      alert("지출한 날짜를 입력해주세요!");
      return;
    }
    if (!desVal) {
      alert("지출한 내용에 대해 입력해주세요!");
      return;
    }
    if (!priceVal) {
      alert("지출한 금액을 입력해주세요!");
      return;
    }

    const notModifyList = list.filter(
      (li) => Number(li.id) !== Number(listId.listId)
    );
    const ModifiedList = [
      ...notModifyList,
      {
        id: listId.listId,
        date: dateVal,
        item: itemVal,
        description: desVal,
        price: priceVal,
      },
    ];

    setList(ModifiedList);
    localStorage.setItem("spending list", JSON.stringify(ModifiedList));

    navigate("/");
  };

  const GoBackButton = () => {
    navigate("/");
  };
  return (
    <>
      <ListBox>
        <IconBox>{detailedList.item.split(" ")[0]}</IconBox>
        <div>
          <DateBox>{detailedList.date}</DateBox>
          <DescriptionBox>{detailedList.description}</DescriptionBox>
        </div>
        {detailedList.price}
      </ListBox>
      <ModalContainer>
        <Inputs type="date" ref={dateRef}></Inputs>
        <ItemSelect ref={itemRef}>
          <option>🎂 식비</option>
          <option>✈️ 여행 경비</option>
          <option>🛍️ 쇼핑</option>
          <option>🎁 친구 선물</option>
          <option>✨ 기타</option>
        </ItemSelect>
        <Inputs type="text" placeholder="내용" ref={descriptionRef}></Inputs>
        <Inputs type="number" placeholder="지출 금액" ref={priceRef}></Inputs>
        <ButtonContainer>
          <ModalButton onClick={ModifyButton}>수정</ModalButton>
          <ModalButton onClick={DeleteButton}>삭제</ModalButton>
          <ModalButton onClick={GoBackButton}>뒤로 가기</ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default Detailed;

import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  Inputs,
  ItemSelect,
  ButtonContainer,
  ModalButton,
} from "./Modal";

const Modify = ({ listId, list, setList }) => {
  const dateRef = useRef();
  const itemRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const navigate = useNavigate();

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
    if (!desVal.trim()) {
      alert("지출한 내용에 대해 입력해주세요!");
      return;
    }
    if (!priceVal) {
      alert("지출한 금액을 입력해주세요!");
      return;
    }

    const ModifiedList = list.map((li) => {
      if (Number(li.id) === Number(listId.listId)) {
        li = {
          id: listId.listId,
          date: dateVal,
          item: itemVal,
          description: desVal,
          price: priceVal,
        };
      }
      return li;
    });

    setList(ModifiedList);
    localStorage.setItem("spending list", JSON.stringify(ModifiedList));

    navigate("/");
  };

  const GoBackButton = () => {
    navigate("/");
  };
  return (
    <>
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

export default Modify;

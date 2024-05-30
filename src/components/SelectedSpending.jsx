import React from "react";
import { ListBox, IconBox, DateBox, DescriptionBox } from "./List";

const SelectedSpending = ({ list, listId }) => {
  let detailedList = list.find((li) => Number(li.id) === Number(listId.listId));
  return (
    <>
      <ListBox backgroundColor="#fff" cursor="default" fontSize="18px">
        <IconBox>{detailedList.item.split(" ")[0]}</IconBox>
        <div>
          <DateBox>{detailedList.date}</DateBox>
          <DescriptionBox>{detailedList.description}</DescriptionBox>
        </div>
        {detailedList.price}
      </ListBox>
    </>
  );
};

export default SelectedSpending;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LayoutStyle = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f5f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const HeaderStyle = styled.div`
  width: 200px;
  color: #202632;
  font-size: 38px;
  font-weight: 700;
  margin-top: 50px;
  margin-right: 480px;
  cursor: pointer;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>
        <Header />
        {children}
      </LayoutStyle>
    </>
  );
};

export default Layout;

const Header = () => {
  const navigate = useNavigate();

  const OnClickHeader = () => {
    navigate("/");
  };
  return (
    <>
      <HeaderStyle onClick={OnClickHeader}>Spending Tracker.</HeaderStyle>
    </>
  );
};

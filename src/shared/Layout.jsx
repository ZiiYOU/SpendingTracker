import React from "react";
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
  return (
    <>
      <HeaderStyle>Spending Tracker.</HeaderStyle>
    </>
  );
};

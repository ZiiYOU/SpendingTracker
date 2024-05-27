import React from "react";
import styled from "styled-components";
import Month from "../components/Month";
import Summary from "../components/Summary";
import List from "../components/List";
import Addition from "../components/Addition";

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
  return (
    <Sticky>
      <Inner>
        <Month />
        <Summary />
        <List />
      </Inner>
      <Addition />
    </Sticky>
  );
};

export default Home;

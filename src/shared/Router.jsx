import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detailed from "../pages/Detailed";
import Layout from "./Layout";
import { useState } from "react";

const Router = () => {
  const [list, setList] = useState([]);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home list={list} setList={setList} />} />
          <Route
            path="detailed/:listId"
            element={<Detailed list={list} setList={setList} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detailed from "../pages/Detailed";
import Layout from "./Layout";
import SpendingProvider from "../context/spendingListContext";

const Router = () => {
  return (
    <SpendingProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detailed/:listId" element={<Detailed />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SpendingProvider>
  );
};

export default Router;

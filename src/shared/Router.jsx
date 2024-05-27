import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detailed from "../pages/Detailed";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detailed" element={<Detailed />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

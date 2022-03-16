import React from "react";
import NavBarContainer from "./NavBarContainer";
import MainContainer from "./MainContainer";
import FooterContainer from "./FooterContainer";
import { BrowserRouter } from "react-router-dom";

const DocumentContainer = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <BrowserRouter>
        <NavBarContainer />
        <MainContainer />
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
};

export default DocumentContainer;

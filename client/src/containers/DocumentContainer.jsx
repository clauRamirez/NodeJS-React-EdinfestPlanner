import React from "react";
import NavBarContainer from "./NavBarContainer";
import MainContainer from "./MainContainer";
import FooterContainer from "./FooterContainer";
import { BrowserRouter } from "react-router-dom";

const DocumentContainer = () => {
  return (
    <div id='document'>
      <BrowserRouter>
        <NavBarContainer />
        <MainContainer />
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
};

export default DocumentContainer;

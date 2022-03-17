import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import CalendarPage from "../pages/CalendarPage";
import FavouritesPage from "../pages/FavouritesPage";
import FestivalPage from "../pages/FestivalPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const Router = ({onEventClick}) => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/calendar' element={<CalendarPage />} />
      <Route
        path='/favourites'
        element={<FavouritesPage onEventClick={onEventClick} />}
      />
      <Route
        exact
        path='/festivals/:festival'
        element={
          <FestivalPage
            key={window.location.pathname}
            onEventClick={onEventClick}
          />
        }
      />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};

export default Router;

import React, { useState, useEffect } from "react";

import Router from "../routes/Router";

import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from "../context/FavouritesDataContext";

const MainContainer = () => {
  // separate Routes logic from State logic

  const [festivalData, setFestivalData] = useState([]);
  const [favouritesData, setFavouritesData] = useState(() => {
    const storage = localStorage.getItem("favourites");
    const parsedStorage = JSON.parse(storage);
    return parsedStorage || [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouritesData));
  }, [favouritesData]);

  const onEventClick = (newFavourite) => {
    // maybe move this to FavouritePage
    const favouritesDataCodes = favouritesData.map(
      (favourite) => favourite.code
    );

    if (favouritesDataCodes.includes(newFavourite.code)) {
      setFavouritesData((favouritesData) =>
        favouritesData.filter(
          (favourite) => favourite.code !== newFavourite.code
        )
      );
    } else {
      setFavouritesData((favouritesData) => [...favouritesData, newFavourite]);
    }
  };

  return (
    <main
      style={{
        paddingBottom: "8vh",
        paddingLeft: "8vw",
        flexGrow: "1",
        minHeight: "100%",
      }}
    >
      <FestivalDataContext.Provider value={{ festivalData, setFestivalData }}>
        <FavouritesDataContext.Provider
          value={{ favouritesData, setFavouritesData }}
        >
          <Router onEventClick={onEventClick}/>
        </FavouritesDataContext.Provider>
      </FestivalDataContext.Provider>
    </main>
  );
};

export default MainContainer;

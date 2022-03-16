import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventList from "../components/event/EventList";
import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from "../context/FavouritesDataContext";
import SearchBar from "../components/searchBar/SearchBar";

const FestivalPage = ({ onEventClick }) => {
  const { festivalData, setFestivalData } = useContext(FestivalDataContext);
  const { favouritesData } = useContext(
    FavouritesDataContext
  );

  const [finalFestivalData, setFinalFestivalData] = useState([]);

  const { festival } = useParams();

  const [search, setSearch] = useState("");

  const fetchFestivals = () => {
    fetch(`http://localhost:8080/festivals?id=${festival}`)
      .then((response) => response.json())
      .then((data) => setFestivalData(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchFestivals();
  }, [festival]);

  useEffect(() => {
    /**
     * BUG: it's not save which ones are in favourites because when we fetch data from another festival
     * the 'favourited' property disappears
     *
     * we need to somehow select data that's already inside the object
     */
    setFinalFestivalData(
      festivalData.length > 0
        ? festivalData.map((event) => {
            // instead of checking if it's inside array we check their event codes which are unique
            // put them inside an array of just the codes
            const favouriteEventCodes = favouritesData.map(
              (favouriteEvent) => favouriteEvent.code
            );

            // we check that event.code is inside favourites codes, if match, attach property
            const property = favouriteEventCodes.includes(event.code);
            event.favourited = property;
            return event;
          })
        : []
    );
  }, [favouritesData]);

  return (
    <>
      <h2>{festival[0].toUpperCase() + festival.substring(1)} festival</h2>
      <SearchBar setSearch={setSearch} />
      <EventList
        context={
          finalFestivalData.length > 0 ? finalFestivalData : festivalData
        }
        onEventClick={onEventClick}
        search={search}
      />
    </>
  );
};

export default FestivalPage;

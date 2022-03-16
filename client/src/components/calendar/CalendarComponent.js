import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import FavouritesDataContext from "../../context/FavouritesDataContext";

const CalendarComponent = () => {
  const localizer = momentLocalizer(moment);

  let { favouritesData } = useContext(FavouritesDataContext);

  const myEvents = favouritesData.flatMap((event) => {
    return event.performances
      ? event.performances.map((performance) => {
          return {
            title: event.title,
            start: new Date(performance.start),
            end: new Date(performance.end),
            allDay: false,
          };
        })
      : event;
  });

  let date;

  favouritesData.length > 0
    ? (date = new Date(favouritesData[0].performances[0].start))
    : (date = new Date());

  return (
    <>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor='start'
        endAccessor='end'
        defaultDate={date}
        style={{ height: "85vh", width: "100vh" }}
      />
    </>
  );
};

export default CalendarComponent;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventListItem from "./EventListItem";
import { allowScroll } from "../../helpers/scrollBehaviours";

const EventList = ({ context, onEventClick, search = null }) => {
  const currentPath = useLocation().pathname;
  let eventListNodes;

  if (search === null) {
    eventListNodes = context.map((event, index) => {
      return (
        <EventListItem
          key={`${currentPath}-${index}`}
          event={event}
          onEventClick={onEventClick}
        />
      );
    });
  } else {
    eventListNodes = context.map((event, index) => {
      if (event.title?.toLowerCase().includes(search?.toLowerCase()))
        return (
          <EventListItem
            key={`${currentPath}-${index}`}
            event={event}
            onEventClick={onEventClick}
          />
        );
    });
  }

  useEffect(() => {
    // BUG: removing last element from favourite events
    // caused the element to dismount before running allowScroll
    // preventing the user to scroll anywhere in the page
    // this runs allowScroll everytime the eventListNodes changes
    if (context.length <= 0) {
      allowScroll();
    }
  }, [eventListNodes]);

  return <section className='event-gallery'>{eventListNodes}</section>;
};

export default EventList;

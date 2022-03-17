import React, { useState } from "react";
import EventListItemModal from "./EventListItemModal";
import { getImageFromEvent } from "../../helpers/getImageFromEvent";
import { preventScroll, allowScroll } from "../../helpers/scrollBehaviours";
import { shortenTitle } from "../../helpers/shortenTitle";

const EventListItem = ({ event, onEventClick }) => {
  const [shows, setShows] = useState(false);

  const image = getImageFromEvent(event, "small-320");

  const handleClick = () => {
    onEventClick(event);

    !event.favourited
      ? localStorage.setItem(event.code, JSON.stringify(event))
      : localStorage.removeItem(event.code, JSON.stringify(event));
  };

  const toggleHidden = () => {
    setShows(!shows);

    !shows ? preventScroll() : allowScroll();
  };

  const onClickOutsideCloseModal = (event) => {
    if (!event.target.firstChild.classList) return;

    if (event.target.firstChild.classList.contains("modal-wrapper")) {
      toggleHidden();
    }
  };


  return (
    <>
      <div className='event-wrapper'>
        <img
          className='rounded shadow'
          src={image.url}
          onClick={() => toggleHidden()}
        />

        <div className='event-wrapper-title-container'>
          <div className='hover-heart' onClick={handleClick}>
            <i
              className='fa far fa-heart'
              style={{
                color: event.favourited ? "rgb(192, 24, 178)" : "white",
              }}
            />
          </div>
          <span className='event-wrapper-title' onClick={() => toggleHidden()}>
            {shortenTitle(event.title, 18)}
          </span>
        </div>
      </div>
      {shows ? (
        <EventListItemModal
          currentEvent={event}
          toggleHidden={toggleHidden}
          onClickOutsideCloseModal={onClickOutsideCloseModal}
        />
      ) : null}
    </>
  );
};

export default EventListItem;

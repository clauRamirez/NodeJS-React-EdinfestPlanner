import React from "react";
import HomeCard from "../components/cards/HomeCard";
import artImage from "../static/images/art.jpg";
import bookImage from "../static/images/book.jpg";
import imaginationImage from "../static/images/imagination.jpg";
import jazzImage from "../static/images/jazz.jpg";
import storytellingImage from "../static/images/storytelling.jpg";
import internationalImage from "../static/images/international.jpg";

const festivals = [
  {
    name: "art",
    path: "/festivals/art",
    img: artImage,
  },
  {
    name: "book",
    path: "/festivals/book",
    img: bookImage,
  },
  {
    name: "imaginate",
    path: "/festivals/imaginate",
    img: imaginationImage,
  },
  {
    name: "jazz",
    path: "/festivals/jazz",
    img: jazzImage,
  },
  {
    name: "storytelling",
    path: "/festivals/storytelling",
    img: storytellingImage,
  },
  {
    name: "international",
    path: "/festivals/international",
    img: internationalImage,
  },
];

const HomePage = () => {
  const festivalNodes = festivals.map((i) => {
    return <HomeCard key={i.name} festival={i} />;
  });

  return (
    <div className='home-page-container'>
      <h1>Edinfest planner</h1>

      <section className='home-page-gallery'>
        {festivalNodes}
      </section>
    </div>
  );
};

export default HomePage;

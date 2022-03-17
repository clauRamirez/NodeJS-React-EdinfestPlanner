import React from "react";
import AboutCard from "../components/cards/AboutCard";
import Stack from "react-bootstrap/Stack";
import clauChihuahua from "../static/images/clauChihuahua.jpg";
import mirkaChihuahua from "../static/images/mirkaChihuahua.jpg";
import jessieChihuahua from "../static/images/jessieChihuahua.jpg";

const icons = [
  {
    name: "java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "spring",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
  },
  {
    name: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
  },
  {
    name: "mongodb",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  },
];

const devTeam = [
  {
    name: "Clau Ramirez",
    picture: clauChihuahua,
    socialMedia: {
      github: "https://github.com/clauRamirez",
      linkedin: "https://www.linkedin.com/in/clau-ramirez",
    },
  },
  {
    name: "Mirka Zacharova",
    picture: mirkaChihuahua,
    socialMedia: {
      github: "https://github.com/mirkiy",
      linkedin: "https://www.linkedin.com/in/miroslava-zacharova",
    },
  },
  {
    name: "Jessie Dodge",
    picture: jessieChihuahua,
    socialMedia: {
      github: "https://github.com/jhtdod",
      linkedin: "https://www.linkedin.com/in/jessie-dodge",
    },
  },
];

const AboutPage = () => {
  const iconNodes = icons.map((i) => {
    return (
      <img
        className='stack-icon'
        key={i.name}
        src={i.src}
        alt={i.name + " logo icon"}
      />
    );
  });

  const devTeamNodes = devTeam.map((i) => {
    return <AboutCard key={i.name} person={i} />;
  });

  return (
    <>
      <h2>About Us</h2>

      <div className='container about-text'>
        <p>
          Thanks for visiting our final project for the Software Development
          bootcamp at{" "}
          <a
            href='https://codeclan.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            CodeClan.{" "}
          </a>
        </p>
        <p>
          In this web application we&apos;ve written a Java and Spring Boot
          server to connect our React client with our MongoDB database and the{" "}
          <a
            href='https://api.edinburghfestivalcity.com/explore'
            target='_blank'
            rel='noopener noreferrer'
          >
            Edinburgh Festivals API
          </a>
          .
        </p>

        <p>These are the main tools we&apos;ve used: </p>
        <Stack direction='horizontal' className='about-icons'>
          {iconNodes}
        </Stack>
        <p className="github-repo-link" >
          <a
            href='https://github.com/mirkiy/festival-planner-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Have a peek at our project&apos;s repository !
          </a>
        </p>
      </div>

      <div className='container about-container'>
        <div className='row text-center'>
          {devTeamNodes}
        </div>
      </div>
    </>
  );
};

export default AboutPage;

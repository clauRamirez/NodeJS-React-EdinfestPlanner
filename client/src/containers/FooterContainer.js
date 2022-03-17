import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SocialMediaIcon from "../components/socialMedia/SocialMediaIcon";

const icons = [
  {
    icon: "fa fa-brands fa-facebook-f",
    href: "https://facebook.com",
    alt: "facebook icon",
  },
  {
    icon: "fa fa-brands fa-twitter",
    href: "https://twitter.com",
    alt: "twitter icon",
  },
  {
    icon: "fa fa-brands fa-pinterest",
    href: "https://pinterest.com",
    alt: "github icon",
  },
  {
    icon: "fa fa-brands fa-instagram",
    href: "https://www.instagram.com/",
    alt: "instagram icon",
  },
];

const FooterContainer = () => {
  const iconNodes = icons.map((icon, index) => {
    return <SocialMediaIcon key={index} icon={icon} />;
  });

  return (
    <footer>
      <Container className='footer-container'>
        <Stack>
          <Stack
            id='social-media-wrapper'
            direction='horizontal'
            gap={3}
          >
            {iconNodes}
          </Stack>
          <i className='footer-text'>Follow us on social media</i>
          <hr />
          <p className='footer-text'>
            2022 &copy; Overconfident Rats{" "}
            <a
              href='https://www.pret.co.uk/en-GB/pretcoffeesub'
              target='_blank'
              rel='noopener noreferrer'
            >
              ☕️
            </a>
          </p>
        </Stack>
      </Container>
    </footer>
  );
};

export default FooterContainer;

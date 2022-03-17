import React from "react";

const SocialMediaIcon = ({ icon }) => {
  return (
    <div
      className=' rounded social-media-icon'
    >
      <a
        href={icon.href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className={icon.icon} alt={icon.alt} />
      </a>
    </div>
  );
};

export default SocialMediaIcon;

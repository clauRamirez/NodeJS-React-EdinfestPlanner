import React from "react";

const AboutCard = ({ person }) => {
  {
    /* Source: https://bootstrapious.com/p/team-page */
  }

  return (
    <div className='col-xl-4 col-sm-4 mb-5'>
      <div className='bg-white rounded shadow py-5 px-4'>
        <img
          src={person.picture}
          alt=''
          className='img-fluid rounded-circle mb-3 img-thumbnail shadow'
        />
        <h5 className='mb-0'>{person.name}</h5>
        <span className='small text-uppercase text-muted'>
          Software Developer
        </span>
        <ul className='social mb-0 list-inline mt-3'>
          <li className='list-inline-item'>
            <a
              href={person.socialMedia.github}
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
            >
              <i className='fa fa-brands fa-github'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a
              href={person.socialMedia.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
            >
              <i className='fa fa-linkedin'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;

import React from 'react'

const HomeCard = ({festival}) => {
  return (
    <div className='home-event-wrapper'>
    <a href={festival.path}>
      <img
        className='rounded'
        width='320px'
        height='180px'
        src={festival.img}
      />
      <span>{festival.name.toUpperCase()}</span>
    </a>
  </div>

  )
}

export default HomeCard
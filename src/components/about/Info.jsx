import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid' >
      <div className="about__box">
        <i className="bx bx-book-open about__icon"></i>

        <h3 className="about__title"> self-learner</h3>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase about__icon"></i>

        <h3 className="about__title"> responsible</h3>
      </div>
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">loyalty</h3>
      </div>
    </div>
  )
}

export default Info
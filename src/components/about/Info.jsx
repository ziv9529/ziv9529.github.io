import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-book-open about__icon"></i>

        <h3 className="about__title">3+ Years</h3>
        <h4 className="about__subtitle">Experience</h4>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase about__icon"></i>

        <h3 className="about__title">6 Engineers</h3>
        <h4 className="about__subtitle">Led</h4>
      </div>
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">99.9%</h3>
        <h4 className="about__subtitle">Uptime</h4>
      </div>
    </div>
  );
};

export default Info;

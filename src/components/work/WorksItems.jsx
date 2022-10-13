import React from 'react'

const WorksItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <h2 className="work__subtitle">Technologies: {item.technologies}</h2>
            <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorksItems
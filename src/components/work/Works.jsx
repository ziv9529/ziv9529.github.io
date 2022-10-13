import React from 'react'
import { projectsData } from "./Data"
import WorksItems from './WorksItems'
const Works = () => {
  return (
    <div className='work__container container grid'>
      {projectsData.map((item) => {
        return <WorksItems item={item} key={item.id} />
      })}
    </div>
  )
}

export default Works
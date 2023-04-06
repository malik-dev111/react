import React from 'react'
import './CardSidebar.scss'
const CardSidebar = () => {
  return (
    <div className='card-s' >
      <div>
        <h2>
          Interviews
        </h2>
      </div>
      <div className="card-1">
        Figma | Product Designer
        Interview | Chad Lee
        May 4, 2020 @12:30 pm - 1:00 pm
      </div>
      <div>
        <h2>
          Roles
        </h2>
      </div>
      <div className="twocard-s">
        <div className="mini-card">

          <div className="card">
            <h1>6</h1>
            <p>VisualDesigner</p>
          </div>
          <br /> <div className="card">
            <h1>4</h1>
            <p>ProductDesigner</p>
          </div>
          <br /> <div className="card">
            <h1>6</h1>
            <p>InteractiveDesigner</p>
          </div>
          <br /> <div className="card">
            <h1>2</h1>
            <p>UX/UIDesigner</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default CardSidebar
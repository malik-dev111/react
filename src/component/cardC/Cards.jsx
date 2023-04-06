import React from 'react'
import './Cards.scss'
const cards = () => {
    return (
        <div>
            <div className="date">
            Welcome John!
            <br />
            May 28, 2020
            </div>
            <br /><br />
            <h1 className='h1'>Application Statistics</h1>
        <div className="cards">
            <div className='card-6' >
                <h1>6</h1>
                <p>Contract Roles</p>
            </div>
            <div className='card-12' >
                <h1>12</h1>
                <p>Full-Time Roles</p>
            </div>
            
            <div className='card-18' >
                <h1>18</h1>
                <p>Total Applications</p>
            </div>
        </div>
        </div>
    )
}

export default cards
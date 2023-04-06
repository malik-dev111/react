import React from 'react'
import './Sidebar.scss'
import jb from './elipse.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import img7 from './img7.png'

const Sidebar = () => {
  return (
    <div>
        <aside>
           <div className='jb' >
            <br /> 
                <div className='circle' > 
                    <img src={jb} alt="" />
                 </div>
                <h3>JB</h3>
           </div> 
           <br /><br /><br />
           <br /><br /><br />
           <br /><br /><br />
           <div className="sidebar-imgs">
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img7} alt="" />
            <img src={img1} alt="" />
            <img src={img6} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
           </div>
        </aside>
    </div>
  )
}

export default Sidebar
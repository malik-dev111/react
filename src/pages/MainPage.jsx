import React from 'react';
import Statusboard from '../component/Status-board/Statusboard'
import Sidebar from '../component/Sidebar/Sidebar'
import CardC from '../component/cardC/CardC'
import Cardsidebar from '../component/Card-sidebar/CardSidebar'
import './MainPage.scss'



const MainPage = () => {
  return (
  <div className='body'>
     <div className="figma">
      <Sidebar/>  
        <div className="clear">
        <CardC/> 
     <Statusboard/>
        </div>
      <Cardsidebar/>
     </div>
  </div>
  );
}

export default MainPage 
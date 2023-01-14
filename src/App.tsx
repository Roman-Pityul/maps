import React from 'react'

import { Map, SideBar } from './components'

import './App.scss'

const App: React.FC = () => {

  return (
    <div className='wraper'>
      <Map />
      <SideBar />
    </div>
  );
}

export default App;

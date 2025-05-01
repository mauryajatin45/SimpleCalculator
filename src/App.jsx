import { useState } from 'react'
import LeftBar from './Components/LeftBar'
import RightBar from './Components/RightBar'

function App() {

  return (
    <>
      <div className="main w-screen h-screen bg-gray-600 flex flex-row flex-nowrap">
        <LeftBar></LeftBar>
        <RightBar></RightBar>
      </div>
    </>
  )
}

export default App

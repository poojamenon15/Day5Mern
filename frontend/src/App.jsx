import { useState } from 'react'
import './App.css'
import Navibar from './components/Navibar'

import ViewStudent1 from './components/ViewStudent1'
import AddStudent1 from './components/AddStudent1'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navibar/>
     <Routes>
      <Route path='/b' element={<AddStudent1/>}/>
      <Route path='/s' element={<ViewStudent1/>} />
     </Routes>
    </>
  )
}

export default App

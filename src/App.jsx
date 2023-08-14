import React from 'react'
import Login from './components/Login'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Welcome from './components/Welcome'
const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<Welcome/>}/> */}
        <Route path='/' element={<Login/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
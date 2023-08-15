import React from 'react'
import Login from './components/Login'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
const App = () => {

  const user = useSelector(selectUser);
  return (
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<Welcome/>}/> */}
        <Route path='/' element={user? <Welcome/> : <Login/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
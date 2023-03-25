import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Aside from './components/aside/Aside'
import Routing from './utils/Routing'

const App = () => {
  const location = useLocation();
  const [authentification, setAuthentification] = useState(false)

  useEffect(() => {
    location.pathname === '/login' || location.pathname === '/register' ? setAuthentification(true) : setAuthentification(false)
  }, [location.pathname, setAuthentification])


  return (
    <>
      {authentification ?
        <Routing />
        :
        <Aside children={<>
          <Routing />
        </>} />}
    </>
  )
}

export default App
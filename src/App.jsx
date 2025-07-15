import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Watch from './pages/Watch'
import Search from './pages/Search'
import store from './store/store'
import Layout from './pages/Layout'




function App() {
  const PATH = [
    {path:"/search", element:<Search/>},
    {path:"/watch:id", element:<Watch/>},
  ];

  return (
     <BrowserRouter>
     <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        {
          PATH.map((x,index)=><Route path={x.path} element={x.element} key={index} />)
        }
       </Routes>
     </Provider>
     </BrowserRouter>
  )
}

export default App

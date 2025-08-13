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
import Error from './pages/Error'
import {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { fetchVideos } from './store/postslice'




function App() {


  return (
     <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/search/:content?' element={<Search />} />
          </Route>
          <Route path='watch/:id' element={<Watch />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Provider>
     </BrowserRouter>
  )
}

export default App

import React from 'react'
import {
    Route,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import AboutUsPage from '../pages/AboutUsPage';
import WebPages from '../pages/WebPages';

const SetupRoute = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<WebPages />} />
              <Route path='/aboutus' element={<AboutUsPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default SetupRoute
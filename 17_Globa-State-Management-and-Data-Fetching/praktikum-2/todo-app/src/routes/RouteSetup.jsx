import React from 'react';
import {
    Route,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import AboutApp from '../component/about/AboutApp';
import AboutTheAuthor from '../component/about/AboutTheAuthor';
import AboutPages from '../pages/AboutPages';
import NotFoundPage from '../pages/NotFound';
import TodoPages from '../pages/TodoPages';
  
const RouteSetup = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoPages />}></Route>
                <Route path='/about' element={<AboutPages />}></Route>
                <Route path='/about/about-app' element={<AboutApp />}></Route>
                <Route path='/about/about-author' element={<AboutTheAuthor />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSetup
  
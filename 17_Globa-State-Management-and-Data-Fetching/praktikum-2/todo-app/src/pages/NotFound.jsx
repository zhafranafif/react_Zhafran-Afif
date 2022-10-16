import React from "react";
import { Link } from "react-router-dom";
import NotFoundBg from '../assets/404.jpg'

const NotFoundPage = () => {
    return (
        <div className="notfoundpage">
            <div className="notfoundpage-main">
            <img src={NotFoundBg} alt="" />
            <h3>Oops! Something When Wrong!</h3>
            <Link to={'/'}><button>Return To Home</button></Link>
            </div>
        </div>
            
    )
}
export default NotFoundPage
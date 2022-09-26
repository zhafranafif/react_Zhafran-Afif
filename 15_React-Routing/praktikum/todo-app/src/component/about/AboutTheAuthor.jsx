import React from "react";
import AboutNavBar from "../navbar/AboutNavBar";

const AboutTheAuthor = () => {
    return (
        <>
        <AboutNavBar/>
        <div style={{marginTop : '20px', textAlign : "center"}}>
            <h2 style={{fontWeight: '700'}}>About the Author</h2> 
            <p>This app was developed by someone, a self-taught web developer and technical writer.</p>
        </div>
        </>
    )
}
export default AboutTheAuthor
import React from "react";
import AboutNavBar from "../navbar/AboutNavBar";

const AboutApp = () => {
    return (
        <>
        <AboutNavBar/>
        <div style={{ marginTop: '20px', textAlign: "center" }}>
            <h2 style={{fontWeight : '700'}}>About the App</h2>
            <p>In this app, you can add, delete, submit, and edit items. To edit items, simply double click on it. 
                Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage.
                So whether you reload, close your app or reopened it. You still have access to your todos items.
            </p>
            </div>
        </>
    )
}
export default AboutApp
import React from "react";
import "./About.css";

export default function About() {
    return (
        <div id="about" className="about-container">
            <div className="intro-container">
                <h1>
                    Hi! My name is Timothy! 
                </h1>
            </div>
            <div className="intro-container2">
                Currently waiting for university admission!
            </div>
            <div className="intro-container3">
                <ul className="intro-list">
                    <h1>
                        Hobbies
                    </h1>
                    <li>
                        Playing games
                    </li>
                    <li>
                        Watching shows
                    </li>
                </ul>
                <ul className="intro-list">
                    <h1>
                        Goals
                    </h1>
                    <li>
                        To be a good programmer
                    </li>
                    <li>
                        To work on my weaknesses
                    </li>
                </ul>
            </div>
        </div>
    )
}
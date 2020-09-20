import React, {useEffect, useState} from 'react';
import './Activity.css';

const Moodivities = () => {

    return (
        <div>
            <div className="activity-container">
                <div className="emoji-container">
                    <button className="emoji">😱<br></br><p class="emotion center">fear</p></button>
                </div>
                <div className="activity center">
                    <p>Exercise to de-stress after a long day</p>
                </div>
            </div>
            
            <div className="activity-container">
                <div className="emoji-container">
                    <button className="emoji">🥱<br></br><p class="emotion center">bored</p></button>
                </div>
                <div className="activity center">
                    <p>Treat yourself with your favorite food, movie, or video game</p>
                </div>
            </div>
            
            <hr className="separator"></hr>
            <h1 className="center suggest-heading">View Other Activities Below</h1>
            
            <div id="emoji-list">
                <div className="emoji-container">
                    <button className="emoji">🥰<br></br><p class="emotion center">happy</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">🤩<br></br><p class="emotion center">excited</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">😢<br></br><p class="emotion center">sad</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">😡<br></br><p class="emotion center">angry</p></button>
                </div>
            </div>
        </div>
    )
}

export default Moodivities;
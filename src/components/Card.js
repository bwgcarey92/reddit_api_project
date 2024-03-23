import React from "react";
//import mountain from './images/mountain.jpg'
export default function Card() {
    return (
        <div className="card-container">
            <img className="card-image" />
            <div className="card-info" >
                <p className="card-author">Posted By: BlahBlahBlah</p>
                <p className="card-date">12 hours ago</p>
                <p className="card-comments">88 comments</p>
            </div>
        </div>
    )
}
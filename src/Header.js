import React from "react";
import { FaRedditAlien } from "react-icons/fa";

export default function Header() {
    return (
        <div className="header">
            <div className="logo-div">
                <FaRedditAlien className="logo-img"/>
                <h2 className="logo-title">$KR0LIT</h2>
            </div>
        </div>
    );
};
import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    return (
        <div>
            <div className="topicBox">
                <span className="text">My Fav food is {props.food} the price is {props.price}</span>
            </div>
        </div>
    )
}

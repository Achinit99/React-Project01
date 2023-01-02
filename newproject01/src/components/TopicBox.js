import React from 'react';
import './topicbox.css';

export default function TopicBox(props) {
  return (
    <div className="topic">
      <center>
        <span className="text">This is the {props.object} price is {props.price}</span>
      </center>
    </div>

  );
} 
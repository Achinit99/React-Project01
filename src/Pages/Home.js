import React from 'react'
// import TopicBox from '../components/TopicBox'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <link to="/About"> Go to the about page</link>
            {/* <TopicBox food="koththu" price="Rs 50" />
            <TopicBox food="rice" price="Rs 150" />
            <TopicBox food="buriyani" price="Rs 550" /> */}
        </div>
    )
}

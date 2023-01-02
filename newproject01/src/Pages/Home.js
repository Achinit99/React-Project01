import React from 'react';
import TopicBox from '../components/TopicBox';
import { Content } from '../components/Content';

export default function Home() {
  return (
    <div>
      <h1>This is a Home Page</h1>
      <TopicBox object="Book" price="250" />
      <TopicBox object="Pencil" price="15" />
      <TopicBox object="Moniter" price="250 000" />
    </div>
  );
}
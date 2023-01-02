import React from 'react';
import TopicBox from '../components/TopicBox';
import { Content } from '../components/Content';

export default function Home() {
  return (
    <div>
      <h1>This is a Home Page</h1>
      <TopicBox object="Book" />
      <TopicBox object="Pencil" />
      <TopicBox object="Moniter" />
    </div>
  );
}
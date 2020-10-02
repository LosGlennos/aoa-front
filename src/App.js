import React from 'react';
import Album from './album/Album';
import Background from './background/Background';
import Intro from './intro/Intro';
import Information from './information/Information';
import Osa from './osa/Osa';
import Program from './program/Program';
import Location from './location/Location';
import Toastmasters from './toastmasters/Toastmasters';
import './App.css';

function App() {
  return (
    <div style={{ height: 100 + '%' }}>
      <Background></Background>
      <Intro></Intro>
      <Information></Information>
      <Album></Album>
      <Location></Location>
      <Program></Program>
      <Toastmasters></Toastmasters>
      <Osa></Osa>
    </div>
  );
}

export default App;

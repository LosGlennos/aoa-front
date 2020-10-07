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
import {Divider} from 'semantic-ui-react'

function App() {
  return (
    <div style={{ height: 100 + '%' }}>
      <Background></Background>
      <Divider/>
      <Intro></Intro>
      <Divider/>
      <Information></Information>
      <Divider/>
      <Album></Album>
      <Divider/>
      <Location></Location>
      <Divider/>
      <Program></Program>
      <Divider/>
      <Toastmasters></Toastmasters>
      <Divider/>
      <Osa></Osa>
    </div>
  );
}

export default App;

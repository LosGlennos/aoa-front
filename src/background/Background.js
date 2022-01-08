import React from 'react';
import './Background.css';
import { Container } from 'semantic-ui-react';

export default function Background() {
  return (
    <div className="bg">
      <Container textAlign="center" className="background-container">
        <div className='text-container'>
          <h1 className="background-text">Anton & Alicia</h1>
          <span>Stenungsögården</span><span style={{ marginLeft: 20 + 'px', marginRight: 20 + 'px' }}>•</span><span>16-17 juli 2022</span>
        </div>
      </Container>
    </div>
  )
}
import React from 'react';
import './Intro.css';
import {Container} from 'semantic-ui-react';

export default function Intro() {
    return (
        <Container textAlign="center">
            <h1 className='heading-text'>VÄLKOMMEN TILL #FYLKE2020</h1>
            <p>Vi ser väldigt mycket fram emot att fira vår stora dag tillsammans med dom vi tycker om allra mest!</p>

            <p>Det blir en helhelg med start på fredagen med mingel och härligt häng. Vigseln äger rum på lördagen med efterföljande middag och fest.</p>
        </Container>
    );
}
import React from 'react';
import './Intro.css';
import { Container } from 'semantic-ui-react';

export default function Intro() {
    return (
        <div className="dark-green-theme container-padding-2em">
            <Container textAlign="center">
                <h1 className='heading-text'>VÄLKOMMEN TILL #FYLKE2021</h1>
                <p>Vi ser väldigt mycket fram emot att fira vår stora dag tillsammans med er vi tycker om allra mest!</p>
                <br />
                <p>Det blir en helhelg med start på fredagen för alla som kan där vi planerar för ett trevligt häng och grillkväll.</p>
                <p>Vigseln äger rum på lördagen med efterföljande middag och fest.</p>
                <p>Söndagen avslutas med en brunch.</p>
                <br />
                <p>Vi vill också förtydliga att vi är mitt i en pandemi (om nån missat) och Stenungsögården följer självklart alla rekommendationer.</p>
                <p>Vi lever på hoppet om att vi i sommar kommer kunna anordna vårt bröllop som planerat och vi kommer uppdatera hemsidan ju närmre bröllopet vi kommer.</p>
            </Container>
        </div>
    );
}
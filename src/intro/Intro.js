import React from 'react';
import './Intro.css';
import { Container } from 'semantic-ui-react';

export default function Intro() {
    return (
        <div className="dark-green-theme container-padding-2em">
            <Container textAlign="center">
                <h1 className='heading-text'>VÄLKOMMEN (igen) TILL #FYLKE2022</h1>
                <p>Vi ser väldigt mycket fram emot att fira vår stora dag tillsammans med er vi tycker om allra mest!</p>
                <br />
                <p>Det blir en helhelg med start på fredagen.<br/>Då det i år är ett bröllop planerat på fredagen så kan vi tyvärr inte vara där, utan planerar nu för alla som kan och vill ses inne i Göteborg och äta något gott.</p>
                <p>Vigseln äger rum på lördagen med efterföljande middag och fest.</p>
                <p>Söndagen avslutas med en brunch.</p>
                <br />
                <p>Vi vill också förtydliga att vi är mitt i en pandemi (igen) och Stenungsögården följer självklart alla rekommendationer.</p>
                <p>Vi utgår från att vi i sommar kommer kunna anordna vårt bröllop som planerat och vi kommer uppdatera hemsidan och er ju närmre bröllopet vi kommer.</p>
            </Container>
        </div>
    );
}
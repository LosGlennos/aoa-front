import React from 'react';
import './Intro.css';
import { Container } from 'semantic-ui-react';

export default function Intro() {
    return (
        <div className="dark-green-theme container-padding-2em">
            <Container textAlign="center">
                <p><b><u>Vi har ställt om OSA funktionen för att kunna ta emot era svar för det nya datumet. Gå gärna in och lämna ert svar så snart som möjligt så att vi kan planera vidare inför dagen.</u></b></p>
            </Container>
            <Container textAlign="center">
                <h1 className='heading-text'>VÄLKOMMEN (igen) TILL #FYLKE2022</h1>
                <p>Vi ser väldigt mycket fram emot att fira vår stora dag tillsammans med er vi tycker om allra mest!</p>
                <p>Det blir en helhelg med start på fredagen.</p>
                <p>
                Då det i år är ett bröllop planerat på fredagen så kan vi tyvärr inte vara där.<br/>
                Vi kommer istället på fredagen att bjuda på catering och ett härligt mingel i en lokal på Blåsutgatan 6 i Majorna.<br/>
                Ert deltagande anmäler ni längre ner på sidan.</p>
                <p>Vigseln äger rum på lördagen med efterföljande middag och fest.</p>
                <p>Söndagen avslutas med en brunch.</p>
                <br />
                <p>Vi vill också förtydliga att vi är mitt i en pandemi (igen) och Stenungsögården följer självklart alla rekommendationer.</p>
                <p>Vi utgår från att vi i sommar kommer kunna anordna vårt bröllop som planerat och vi kommer uppdatera hemsidan och er ju närmre bröllopet vi kommer.</p>
            </Container>
        </div>
    );
}
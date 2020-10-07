import React from 'react';
import './Information.css';
import {Container} from 'semantic-ui-react';

export default function Information() {
    return (
        <Container textAlign="center">
            <h1 className='heading-text'>Viktig information</h1>
            <strong>Klädkod</strong>
            <p>Kavaj</p>
            <br />
            <strong>Boende</strong>
            <p>På ön finns boende för alla gäster och är bokat och klart (vi är de enda som huserar på ön under helgen). Boendet är fördelat i mindre stugor och större hus. När ni kommer till ön och checkar in får ni reda på var ni kommer att bo. Vi kommer att fördela er på bästa möjliga sätt :) Boendet kostar 500 kr/natt och person och betalas på plats.</p>
            <br />
            <strong>Mat</strong>
            <p>Frukost ingår hela helgen. Det finns inga butiker eller andra matställen på ön än värdshuset. De fixar lunch till gästerna på lördagen som kostar runt en hundralapp.</p>
            <br />
            <strong>Barn</strong>
            <p>Ni vet att vi älskar barn men just denna helg vill vi fira med våra vuxna nära och kära. Ammande barn är givetvis välkomna.</p>
            <br />
            <strong>Presenter</strong>
            <p>För oss är den största gåvan att alla vi tycker bäst om kommer och firar vår stora dag. Om ni ändå vill uppvakta oss, så önskar vi oss bidrag till vår bröllopsresa.</p>
            <p>Swish: 0737 78 94 33</p>
            <br />
            <strong>Tänk på att</strong>
            <p>Vigselplatsen är i naturen precis vid vattnet. Så för alla tjejer som planerar att ha stilettklackar är tips att ta med ett par extra lågskor att byta om till vid vigseln.</p>
            <em>Hur du hittar till Stenungsön hittar du längre ner på sidan.</em>
        </Container>
    );
}
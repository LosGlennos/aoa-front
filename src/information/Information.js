import React from 'react';
import './Information.css';
import { Container } from 'semantic-ui-react';

export default function Information() {
    return (
        <div className="green-theme container-padding-2em">
            <Container textAlign="center">
                <h1 className='heading-text'>Viktig information</h1>
                <strong>Klädkod</strong>
                <p>Kavaj</p>
                <br />
                <strong>Boende</strong>
                <p>På Stenungsögården finns det sovplatser reserverat för alla. För att du ska få just det boende du vill, vänligen kontakta receptionen på deras mejl eller telefonnummer.</p>
                <p>Vänta inte med att boka då det är lite först till kvarn. På Stenungsöngårdens hemsida kan ni se bilder, info och priser för de olika alternativen. Ert boende betalas på plats när ni checkar in.</p>
                <p><a href="http://www.stenungsogarden.se/boende/">http://www.stenungsogarden.se/boende/</a></p>
                <br />
                <strong>Mat</strong>
                <p>På fredagen bjuds det på grillat för er som är med oss.</p>
                <p>Frukost på lördagen samt brunchen på söndagen meddelas vid er bokning av boende och betalas på plats.</p>
                <p>Glöm inte att fylla i eventuella allergier, "tycker inte om fisk", specialkost etc.</p>
                <br />
                <strong>Barn</strong>
                <p>Ni vet att vi älskar barn men just denna helg vill vi fira med våra vuxna nära och kära. Ammande barn är givetvis välkomna.</p>
                <br />
                <strong>Presenter</strong>
                <p>För oss är den största gåvan att alla vi tycker bäst om kommer och firar vår stora dag.</p>
                <p>Om ni ändå vill uppvakta oss så önskar vi oss ett bidrag till vår bröllopsresa.</p>
                <p>Era eventuella bidrag är såklart anonyma.</p>
                <p>Pengarna sätts in på ett konto vi inte har tillgång till:</p>
                <p>Bankkonto, 8105-9, 973 352 275-0</p>
                <br />
                <strong>Tänk på att</strong>
                <p>Till och från vigseln är det en kort promenad på en grusväg. Så tjejer eller killar, vi har inga fördomar.</p>
                <p>Tänk på klackarna, ta med ett skoombyte som kan användas till kvällens dans.</p>
                <em>Hur du hittar till Stenungsön hittar du längre ner på sidan.</em>
            </Container>
        </div>
    );
}
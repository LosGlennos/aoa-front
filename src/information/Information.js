import React from 'react';
import './Information.css';
import { Container } from 'semantic-ui-react';

export default function Information() {
    return (
        <div className="green-theme container-padding-2em">
            <Container textAlign="center">
                <h1 className='heading-text'>Viktig information</h1>
                <strong>Klädkod</strong>
                <br/>
                <br/>
                <p>Kavaj</p>
                <br />
                <strong>Boende</strong>
                <br/>
                <br/>
                <p>På Stenungsögården finns det sovplatser reserverat för alla. <br/>Ni som bokat boende för förra sommaren, ni ska ha fått ett mejl om att ert boende är ombokat till 16-17 juli 2022 så ni behöver inte boka igen.</p>
                <p>Har ni inte bokat ert boende så boka så snart som möjligt. <br/>På Stenungsöngårdens hemsida kan ni se bilder, info och priser för de olika alternativen.<br/> Ert boende betalas på plats när ni checkar in.</p>
                <p>Kursgården och Pensionat är ej bokningsbara.</p>
                <p><u><a href="http://www.stenungsogarden.se/boende/" style={{color: "white"}}>http://www.stenungsogarden.se/boende/</a></u></p>
                <br />
                <strong>Mat</strong>
                <br/>
                <br/>
                <p>På fredagen ses vi kl. 18 på Blåsutgatan 6 i Majorna, deltagande och allergier anmäls längre ner på sidan.</p>
                <p>Brunchen på söndagen meddelas vid er bokning av boende och betalas på plats.</p>
                <p>Glöm inte att fylla i eventuella allergier, "tycker inte om fisk", specialkost etc.</p>
                <br/>
                <strong>Barn</strong>
                <br/>
                <br/>
                <p>Ni vet att vi älskar barn men just denna helg vill vi fira med våra vuxna nära och kära. Ammande barn är givetvis välkomna.</p>
                <br />
                <strong>Presenter</strong>
                <br/>
                <br/>
                <p>För oss är den största gåvan att alla vi tycker bäst om kommer och firar vår stora dag.</p>
                <p>Om ni ändå vill uppvakta oss så önskar vi oss ett bidrag till vår bröllopsresa.</p>
                <p>Era eventuella bidrag är såklart anonyma.</p>
                <p>Pengarna sätts in på ett konto vi inte har tillgång till:</p>
                <p>Bankkonto, 8105-9, 973 352 275-0</p>
                <br />
                <strong>Tänk på att</strong>
                <br/>
                <br/>
                <p>Till och från vigseln är det en kort promenad på en grusväg.</p>
                <p>Så tjejer eller killar, vi har inga fördomar, tänk på klackarna. Ta med ett skoombyte som kan användas till kvällens dans.</p>
                <em>Hur du hittar till Stenungsön hittar du längre ner på sidan.</em>
            </Container>
        </div>
    );
}
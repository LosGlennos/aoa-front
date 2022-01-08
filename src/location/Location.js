import React from 'react';
import './Location.css'
import { Container, Grid } from 'semantic-ui-react';

export default function Location() {
    return (
        <div className="dark-green-theme container-padding-2em">
            <Container textAlign="center">
                <h1 className='heading-text'>Hitta till Stenungsön</h1>
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <strong>Från Göteborg</strong>
                        <br/>
                        <br/>
                        <p>Ta E6:an mot Oslo, Kör ca 37 km och sväng av mot väg 160 Tjörn, Orust.</p>
                        <p>Fortsätt på denna väg tills du kommer över en bro och ser Stenungsbaden till vänster, direkt efter bron tar du då höger. Därefter är det skyltat till Stenungsögården.</p>
                        <br />
                        <strong>Från Stockholm</strong>
                        <br/>
                        <br/>
                        <p>Snart ser ni Liseberg, då är det bara lite till.</p>
                        <br/>
                        <strong>Från Sundsvall</strong>
                        <br/>
                        <br/>
                        <p>Förbered er mentalt, ladda med podd, se till att vindrutetorkarna är nya. Ses när ni är framme.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2109.9982994080674!2d11.799939816155717!3d58.07250281818794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464571d8ffffffff%3A0xfabe58b341ef2264!2zU3RlbnVuZ3PDtmfDpXJkZW4!5e0!3m2!1ssv!2sse!4v1602098300112!5m2!1ssv!2sse" className="location-map" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}
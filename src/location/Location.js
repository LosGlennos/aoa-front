import React from 'react';
import './Location.css'
import { Container, Grid } from 'semantic-ui-react';

export default function Location() {
    return (
        <div className="dark-green-theme">
            <Container textAlign="center">
                <h1 className='heading-text'>Hitta till Stenungsön</h1>
                <Grid columns={2} stackable>
                    <Grid.Column>something something something dark side</Grid.Column>
                    <Grid.Column>
                        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2109.9982994080674!2d11.799939816155717!3d58.07250281818794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464571d8ffffffff%3A0xfabe58b341ef2264!2zU3RlbnVuZ3PDtmfDpXJkZW4!5e0!3m2!1ssv!2sse!4v1602098300112!5m2!1ssv!2sse" className="location-map" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}
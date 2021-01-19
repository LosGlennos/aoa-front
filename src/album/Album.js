import React from 'react';
import './Album.css';
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Album() {
    return (
        <Container textAlign="center">
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='/bild1.jpg' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/bild2.jpg' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/bild4.jpg' centered/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='/bild5.jpg' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/bild6.jpg' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/bild7.png' centered/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}
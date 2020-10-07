import React from 'react';
import './Album.css';
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Album() {
    return (
        <Container textAlign="center">
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='/square-image.png' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/square-image.png' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/square-image.png' centered/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='/square-image.png' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/square-image.png' centered/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/square-image.png' centered/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}
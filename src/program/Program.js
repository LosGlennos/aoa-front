import React from 'react';
import './Program.css';
import { Container, Divider, Grid } from 'semantic-ui-react';

export default function Program() {
    return (
        <div className="green-theme container-padding-2em">
            <Container textAlign='center'>
                <h1 className='heading-text'>Program</h1>
            </Container>
            <br />
            <Container className="program">
                <h2>9 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>18:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Mingel samt grillkväll.</h3>
                    </Grid.Column>
                </Grid>
                <br />
                <br />
                <h2>10 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>Valfri tid</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Frukost</h3>
                    </Grid.Column>
                </Grid>
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>14:30</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Mingel</h3>
                    </Grid.Column>
                </Grid>
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>16:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Vigsel</h3>
                    </Grid.Column>
                </Grid>
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>18:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Middag & Fest</h3>
                    </Grid.Column>
                </Grid>
                <br />
                <br />
                <h2>11 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>11:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Brunch</h3>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
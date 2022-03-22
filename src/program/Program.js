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
                <h2>15 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>18:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Förfest på Blåsutgatan 6 i Majorna.</h3>
                    </Grid.Column>
                </Grid>
                <br />
                <br />
                <h2>16 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>15:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Incheckning & Mingel</h3>
                    </Grid.Column>
                </Grid>
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>15:45</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Samling utanför restaurangen (vita huset) <br/>för gemensam promenad till vigseln</h3>
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
                        <h3>16:30 ish</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Snittar & Mingel</h3>
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
                <h2>17 juli</h2>
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
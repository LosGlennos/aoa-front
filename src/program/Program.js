import React from 'react';
import './Program.css';
import { Container, Divider, Grid } from 'semantic-ui-react';

export default function Program() {
    return (
        <div className="green-theme" style={{ padding: 200 + 'px' }}>
            <Container textAlign='center'>
                <h1 className='heading-text'>Program</h1>
            </Container>
            <br />
            <Container className="program">
                <h2>9 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>19:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Vi träffas etc.</h3>
                    </Grid.Column>
                </Grid>
                <br />
                <br />
                <h2>10 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>08:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Lägger basen för dagsfyllan med en fet frukost. Bacon ingår ej.</h3>
                    </Grid.Column>
                </Grid>
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>14:30</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Alicias strippor anländer.</h3>
                    </Grid.Column>
                </Grid>
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>18:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Nu jävlar blir det rajraj!</h3>
                    </Grid.Column>
                </Grid>
                <br />
                <br />
                <h2>11 juli</h2>
                <Divider />
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3>10:00</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Gömmer oss i solglasögonen över ytterligare en fet frukost. Bacon ingår ej.</h3>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
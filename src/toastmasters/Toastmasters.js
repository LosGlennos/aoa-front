import React from 'react';
import './Toastmasters.css';
import { Image, Container } from 'semantic-ui-react';

export default function Toastmasters() {
    return (
        <div className="dark-green-theme container-padding-2em">
            <Container textAlign='center'>
                <h1 className='heading-text'>Toastmasters</h1>
                <Image src='/square-image.png' size='medium' circular centered />
                <h3>Isak Julkunen & Linus Andersson</h3>
                <h3>mail.mail@mail.com</h3>
                <span>Isak Julkunen: 070-000 00 00</span>
                <br/>
                <span>Linus Andersson: 070-000 00 00</span>
                <br/>
                <br/>
                <span>Meddela tal eller spex senast den 15/5.</span>
            </Container>
        </div>
    );
}
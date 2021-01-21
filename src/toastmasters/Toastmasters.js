import React from 'react';
import './Toastmasters.css';
import { Image, Container } from 'semantic-ui-react';

export default function Toastmasters() {
    return (
        <div className="dark-green-theme container-padding-2em">
            <Container textAlign='center'>
                <h1 className='heading-text'>Toastmasters</h1>
                <Image src='/isaklinus.jpeg' size='medium' circular centered />
                <h3>Isak Julkunen & Linus Andersson</h3>
                <h3>fylke2021@gmail.com</h3>
                <p>Isak Julkunen: 070-787 60 50</p>
                <p>Linus Andersson: 070-643 86 26</p>
                <br/>
                <br/>
                <p>Meddela tal eller spex senast den 10/6.</p>
            </Container>
        </div>
    );
}
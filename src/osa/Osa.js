import React from 'react';
import './Osa.css';
import { Checkbox, Container, Form, Button } from 'semantic-ui-react'

export default function Osa() {
    return (
        <div>
            <Container textAlign='center'>
                <h1 className='heading-text'>O.S.A</h1>
            </Container>
            <Container text>
                <Form>
                    <Form.Field>
                        <label>Deltagare</label>
                        <input />
                    </Form.Field>
                    <Form.Field>
                        <label>Övernattning</label>
                        <Checkbox label='Fredag' />
                        <br />
                        <Checkbox label='Lördag' />
                    </Form.Field>
                    <Form.Field>
                        <label>Allergier etc.</label>
                        <input />
                    </Form.Field>
                    <Form.TextArea label='Övrigt' />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </div>
    );
}
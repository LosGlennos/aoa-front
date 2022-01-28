import React from 'react';
import './Osa.css';
import { Checkbox, Container, Form, Button, Input } from 'semantic-ui-react'
import axios from 'axios';

export default function Osa() {
    const [participants, setParticipants] = React.useState('');
    const [dinnerFriday, setDinnerFriday] = React.useState(false);
    const [stayingOverSaturday, setStayingOverSaturday] = React.useState(false);
    const [allergies, setAllergies] = React.useState('');
    const [other, setOther] = React.useState('');
    const [responded, setResponded] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleParticipantsChange = (e) => {
        setParticipants(e.target.value);
    };

    const handleDinnerFridayChange = (e, data) => {
        setDinnerFriday(data.checked);
    };

    const handleStayingOverSaturdayChange = (e, data) => {
        setStayingOverSaturday(data.checked);
    };

    const handleAllergiesChange = (e) => {
        setAllergies(e.target.value);
    }

    const handleOtherChange = (e) => {
        setOther(e.target.value)
    }

    const sendEmail = async () => {
        if (participants === '') {
            setError(true);
            return;
        }

        axios.post("https://7lmnuq9y65.execute-api.eu-west-1.amazonaws.com/default/aoa-send-email", {
            participants: participants,
            dinnerFriday: dinnerFriday,
            stayingOverSaturday: stayingOverSaturday,
            allergies: allergies,
            other: other
        }).then(response => {
            if (response.status === 200) {
                setResponded(true);
            }
        });
    }

    return (
        <div className="green-theme container-padding-2em">
            <Container textAlign='center'>
                <h1 className='heading-text'>O.S.A</h1>
            </Container>
            {responded ? 
            <Container textAlign='center'>
                <h3>Tack för ditt svar! Välkommen!</h3>
            </Container> :
            <Container text>
                 <Form>
                    <Form.Input 
                    label='Deltagare'
                    id='form-input-control-error-deltagare'
                    control={Input}
                    name='participants'
                    value={participants}
                    onChange={handleParticipantsChange}
                    error={error ? {
                        content: 'Fyll i fältet',
                        pointing: 'below',
                    } : false}>
                    </Form.Input>
                    <Form.Field>
                        <label>Förfest i Majorna</label>
                        <Checkbox label='Vill vara med och förfesta i Majorna' checked={dinnerFriday} onChange={handleDinnerFridayChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Övernattning</label>
                        <Checkbox label='Lördag till söndag' checked={stayingOverSaturday} onChange={handleStayingOverSaturdayChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Allergier etc.</label>
                        <Input className="green-theme" onChange={handleAllergiesChange} />
                    </Form.Field>
                    <Form.TextArea label='Övrigt' onChange={handleOtherChange} />
                    <Button onClick={sendEmail}>Submit</Button>
                </Form>
            </Container>}
        </div>
    );
}
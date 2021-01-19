import React from 'react';
import './Osa.css';
import { Checkbox, Container, Form, Button, Input } from 'semantic-ui-react'
import axios from 'axios';

export default function Osa() {
    const [participants, setParticipants] = React.useState('');
    const [stayingOverFriday, setStayingOverFriday] = React.useState(false);
    const [stayingOverSaturday, setStayingOverSaturday] = React.useState(false);
    const [allergies, setAllergies] = React.useState('');
    const [other, setOther] = React.useState('');
    const [responded, setResponded] = React.useState(false);

    const handleParticipantsChange = (e) => {
        setParticipants(e.target.value);
    };

    const handleStayingOverFridayChange = (e, data) => {
        setStayingOverFriday(data.checked);
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

    const sendEmail = async() => {
        const response = await axios.post("https://7lmnuq9y65.execute-api.eu-west-1.amazonaws.com/default/aoa-send-email", {
            participants: participants,
            stayingOverFriday: stayingOverFriday,
            stayingOverSaturday: stayingOverSaturday,
            allergies: allergies,
            other: other
        },
        {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });

        if (response.status === 200) {
            setResponded(true);
        }
    }
    
    return (
        <div className="green-theme container-padding-2em">
            <Container textAlign='center'>
                <h1 className='heading-text'>O.S.A</h1>
            </Container>
            <Container text>
                {responded ? "Tackar för däääää" : <Form>
                    <Form.Field>
                        <label>Deltagare</label>
                        <Input className="green-theme" onChange={handleParticipantsChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Övernattning</label>
                        <Checkbox label='Fredag' checked={stayingOverFriday} onChange={handleStayingOverFridayChange} />
                        <br />
                        <Checkbox label='Lördag' checked={stayingOverSaturday} onChange={handleStayingOverSaturdayChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Allergier etc.</label>
                        <Input className="green-theme" onChange={handleAllergiesChange}/>
                    </Form.Field>
                    <Form.TextArea label='Övrigt' onChange={handleOtherChange} />
                    <Button onClick={sendEmail}>Submit</Button>
                </Form> }
            </Container>
        </div>
    );
}
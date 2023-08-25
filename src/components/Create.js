import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function NewProjectForm() {

    const [ title, setTitle ] = useState('');
    const [ cost, setCost ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ description, setDescription ] = useState('');
    const postData = () => {
        const body = {
            title: title,
            duration_days: Number(duration),
            cost: Number(cost),
            description: description,
        }        

        const uri = "http://localhost:8080/projects"
        fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((res) => {
            console.log(res.status, res.json());
        })
    }

    return (
        <Form className="new-project-form">
            <Form.Field>
                <label>Project Title</label>
                <input type='text' maxLength='25' placeholder='Project Title' onChange={(e) => setTitle(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Estimated Cost (USD)</label>
                <input type="number" placeholder='Estimated Cost' onChange={(e) => setCost(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Estimated Duration (Days)</label>
                <input type="number" placeholder='Estimated Duration' onChange={(e) => setDuration(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <textarea name="description" rows="10" cols="25" onChange={(e) => setDescription(e.target.value)}></textarea>
            </Form.Field>
            <Button type="submit" onClick={postData}>Create Project</Button>
        </Form>
    )
}



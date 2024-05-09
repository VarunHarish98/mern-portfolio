import React from 'react'
import SectionTitle from './SectionTitle'
// import { contact } from '../utils/constants'
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
const SERVICE_ID = "service_xi20plz";
const TEMPLATE_ID = "template_u4zdrgu";
const PUBLIC_KEY = "NRkXmg4KyFISOqLfv"

const Contact = () => {

    const { portfolioData } = useSelector(state => state.root)
    const { contact } = portfolioData
    // delete contactid')
    // const contactDetails = {...contact} 
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <>
            <div><SectionTitle title={"Contact Me"} /> </div>
            <div className="py-10">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        name='user_email'
                        placeholder='Email…'
                        required
                        icon='mail'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        name='user_name'
                        placeholder='Name…'
                        required
                        icon='user circle'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        name='user_message'
                        placeholder='Message…'
                        required
                    />
                    <Button type='submit' color='green'>Submit</Button>
                </Form>
            </div>
        </>
    );
}

export default Contact

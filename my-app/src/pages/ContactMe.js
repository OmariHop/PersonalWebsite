import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./ContactMe.css"


const ContactMe = () => {


    const form = useRef();


    // Defining functions to handle email submission
    const sendEmail = (e) =>
    {
        e.preventDefault()

        emailjs
            .sendForm('service_uxx70t9', 'template_cyeni41', form.current, {
                publicKey: 'XvSiKEc5YxGGKPUOI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Thank you! We will be in touch shortly");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Something went wrong");
                },
            );



        // Clearing input fields

    }



    return(
        <div className="page-layout">
            <div className="email-section">
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" name="from_name" placeholder="Enter your first name"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="user_email" placeholder="Enter your email address"/>
                    </div>

                    <div>
                        <label htmlFor="message">Message Me!</label>
                        <textarea id="message" name="message" placeholder=""/>
                    </div>

                    <div>
                    <button type="submit">Submit</button>
                    </div>
                </form>

            </div>
            <div className="illustration-section">
                <div>
                    <h1>Contact Me!</h1>
                    <p>If it seems my chatbot could not answer your queries or provide the information you were looking for. Please fill out the submission field below and let us know what specific details you’d like to learn about me. I’ll do my best to respond promptly and ensure you get the information you need.</p>
                </div>


            </div>


        </div>
    )

}
export default ContactMe;
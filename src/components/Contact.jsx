import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to send the message here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={handleMessageChange} />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
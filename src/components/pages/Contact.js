import React from 'react';
import './styles/Contact.css';

export default function Contact() {
    return (
      <div className='contact'>
        <form>
        <label for="name">Name:</label><br></br>
        <input type="text" id="name" name="name" value="John Doe"></input><br></br>
        <label for="email">E-mail:</label><br></br>
        <input type="text" id="email" name="email" value="johndoe@email.com"></input><br></br>
        <label for="message">Write your message here:</label><br></br>
        <textarea type="text" id="message" name="message" value="Text"></textarea><br></br>
        <button type="submit">Send</button>
        </form>
      </div>
    );
  }
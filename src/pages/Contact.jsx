import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return setStatus('Please fill in all required fields.');
    }
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Send</button>
        <p>{status}</p>
      </form>
      <div className="info">
        <p>Phone: +91-9876543210</p>
        <p>Email: contact@smiledental.com</p>
        <p>Address: 123 Dental Street, Hyderabad</p>
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%" height="300" loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

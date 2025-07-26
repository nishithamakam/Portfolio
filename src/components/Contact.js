import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiEye } from 'react-icons/fi';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
     emailjs.send(
      'service_wb8zcvo',
      'template_8vg14zs',
      formData,
      'QpUi2gTmUK8ETrwqE'
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header" data-aos="fade-up">
         
        <h2>Get in Touch with me<FiEye className="eye-icon"/></h2>

        <p className="subheading">Have a question or want to work together? <br />Feel free to contact me using the form below.</p>
      </div>
      
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message</label>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

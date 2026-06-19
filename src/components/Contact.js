import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';
import { Reveal } from '../hooks/useReveal';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send('service_wb8zcvo', 'template_8vg14zs', formData, 'QpUi2gTmUK8ETrwqE')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setSending(false);
        },
        (error) => {
          console.log('Failed to send email:', error.text);
          alert('Failed to send message. Please try again later.');
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <header className="section-header">
          <span className="section-eyebrow">
            <span className="section-line" aria-hidden="true" /> Contact
          </span>
        </header>

        <div className="contact-card">
          <Reveal className="contact-form-wrap">
            <h2 className="contact-form-title">
              Let&rsquo;s <em>connect</em>
            </h2>

            <p className="contact-note">
              Have a question or just want to say hello? Drop a line&mdash;I&rsquo;ll
              gladly get back to you. Thanks for visiting.
            </p>

            <p className="contact-status">
              <span className="contact-status-dot" aria-hidden="true" />
              Available now &mdash; Hyderabad, IN &amp; Remote
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Full name</label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Email address</label>
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label>Phone number</label>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Suggestions / queries</label>
              </div>

              <button type="submit" className="send-btn" disabled={sending}>
                <span>{sending ? 'Sending…' : 'Send message'}</span>
                <span className="send-btn-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;

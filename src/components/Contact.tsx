import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your EmailJS user ID and service/template IDs
    const serviceID = 'service_vs66ajk';
    const templateID = 'template_4z6xcz6';
    const userID = 'gZkqcmsuoiR6xRiJF';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Message sent!'); // Alert for demonstration
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          rows={4}
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-600">
          Send Message
        </button>
      </form>
      <div className="flex justify-center space-x-6 mt-10">
        <a href="https://www.linkedin.com/in/bhavashesh/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-6xl hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/bunnysunny24" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-6xl hover:text-gray-500 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      contact_email: contactEmail,
      message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!" + result);
        },
        (error) => {
          alert("An error occurred. Please try again." + error);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSendEmail} className="space-y-4">
        {/* Name field */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            className="w-full p-2 border rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Contact Email field */}
        <div>
          <label htmlFor="contactEmail" className="block font-semibold mb-2">
            Contact Email
          </label>
          <input
            id="contactEmail"
            className="w-full p-2 border rounded"
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your message here"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-t to-teal-800 from-teal-900 text-white p-2 rounded hover:from-teal-800 hover:to-teal-700 transition-all shadow-teal-lg hover:shadow-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

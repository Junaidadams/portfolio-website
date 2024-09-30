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
        "service_s8unp8c", // Replace with your EmailJS service ID
        "template_voylw9j", // Replace with your EmailJS template ID
        templateParams,
        "UdeHRDi-vVv_QIwif" // Replace with your EmailJS user ID
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
    <div className=" md:mx-2 p-5 shadow-teal-lg">
      <h2 className="text-gray-700 font-bold text-2xl">Contact Me</h2>
      <form onSubmit={handleSendEmail} className="space-y-4">
        {/* Name field */}
        <div className="space-y-3">
          <label
            htmlFor="name"
            className="w-full  text-teal-900 mx-auto text-lg md:text-xl font-montserrat "
          >
            Name
          </label>
          <input
            id="name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm focus:shadow"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Contact Email field */}
        <div className="space-y-3">
          <label
            htmlFor="contactEmail"
            className="w-full  text-teal-900 mx-auto text-lg md:text-xl font-montserrat "
          >
            Contact Email
          </label>
          <input
            id="contactEmail"
            className="w-full p-2 border rounded focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm focus:shadow"
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>

        {/* Message field */}
        <div className="space-y-3">
          <label
            htmlFor="message"
            className="w-full  text-teal-900 mx-auto text-lg md:text-xl font-montserrat "
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm focus:shadow"
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

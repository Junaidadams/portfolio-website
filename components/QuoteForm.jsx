import React, { useState } from "react";
import emailjs from "emailjs-com";
import { pricingScheme } from "./pricingScheme"; // Import the pricing scheme array

const QuoteForm = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedPages, setSelectedPages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      selected_package: selectedPackage,
      selected_pages: selectedPages.join(", "),
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
          alert("Quote sent successfully!");
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Request a Quote</h2>
      <form onSubmit={handleSendEmail} className="space-y-4">
        {/* Dropdown for selecting a package */}
        <div>
          <label htmlFor="package" className="block font-semibold mb-2">
            Select a Package
          </label>
          <select
            id="package"
            className="w-full p-2 border rounded"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose a package
            </option>
            {pricingScheme.map((scheme) => (
              <option key={scheme.key} value={scheme.name}>
                {scheme.name} - R{scheme.cost}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for selecting pages */}
        <div>
          <label htmlFor="pages" className="block font-semibold mb-2">
            Select Pages (Ctrl/Cmd + Click for multiple)
          </label>
          <select
            id="pages"
            className="w-full p-2 border rounded"
            multiple
            value={selectedPages}
            onChange={(e) =>
              setSelectedPages(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            required
          >
            {pricingScheme
              .find((scheme) => scheme.name === selectedPackage)
              ?.pageOptions.map((page, index) => (
                <option key={index} value={page}>
                  {page}
                </option>
              ))}
          </select>
        </div>

        {/* Optional message field */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            Additional Details
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any additional details for your request"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Quote Request
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;

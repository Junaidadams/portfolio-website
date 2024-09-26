import { useState } from "react";
import emailjs from "emailjs-com";
import { pricingScheme } from "../constants"; // Import the pricing scheme array

const QuoteForm = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedPages, setSelectedPages] = useState([]);
  const [message, setMessage] = useState("");
  const [includeRetainer, setIncludeRetainer] = useState(false); // New state for retainer

  const handleSendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      selected_package: selectedPackage,
      selected_pages: selectedPages.join(", "),
      include_retainer: includeRetainer ? "Yes" : "No", // Include retainer option
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
          alert("Quote sent successfully!" + result);
        },
        (error) => {
          alert("An error occurred. Please try again." + error);
        }
      );
  };

  const handlePageSelection = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    const maxPages =
      pricingScheme.find((scheme) => scheme.name === selectedPackage)
        ?.addOnPageLimit || Infinity;

    if (selectedOptions.length > maxPages) {
      alert(`You can only select up to ${maxPages} pages for this package.`);
      return;
    }

    setSelectedPages(selectedOptions);
  };

  return (
    <div className=" md:mx-2 p-5 shadow-teal-lg">
      <form onSubmit={handleSendEmail} className="space-y-4">
        {/* Dropdown for selecting a package */}
        <h2 className="text-gray-700 font-bold text-2xl">Get Quoted</h2>
        <div className="space-y-3">
          <label
            htmlFor="package"
            className="w-full  text-teal-900 mx-auto text-lg md:text-xl font-montserrat "
          >
            Select a Package
          </label>
          <select
            id="package"
            className="w-full p-2 border rounded focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm focus:shadow"
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
        <div className="space-y-3">
          <div>
            <label
              htmlFor="pages"
              className="w-full  text-teal-900 mx-auto text-lg md:text-xl font-montserrat "
            >
              Select{" "}
              {pricingScheme.find(
                (scheme) => scheme.name === selectedPackage && scheme.key === 1
              )
                ? "sections"
                : "pages"}{" "}
            </label>
            <div>
              <p className="pb-1 font-montserrat ">
                {" "}
                (Ctrl + Click for multiple)
              </p>
              <p className="pb-1 font-montserrat animate-pulse">
                {(() => {
                  const scheme = pricingScheme.find(
                    (scheme) =>
                      scheme.name === selectedPackage && scheme.key === 1
                  );
                  return scheme
                    ? `Choose up to ${scheme.basePagesOrSections} sections, add up to ${scheme.addOnPageLimit} pages at R${scheme.addOnPageCost}/page by including it in the additional details`
                    : `Choose up to ${
                        pricingScheme.find(
                          (scheme) => scheme.name === selectedPackage
                        )?.basePagesOrSections
                      } pages, additional pages are charged at R${
                        pricingScheme.find(
                          (scheme) => scheme.name === selectedPackage
                        )?.addOnPageCost
                      }`;
                })()}
              </p>
            </div>
          </div>
          <select
            id="pages"
            className="w-full p-2 border rounded focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm focus:shadow"
            multiple
            value={selectedPages}
            onChange={handlePageSelection} // Updated handler
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

        {/* Retainer checkbox with monthly cost */}
        {selectedPackage && (
          <div>
            <label
              htmlFor="retainerPackage"
              className="block font-semibold mb-2"
            >
              <input
                id="retainerPackage"
                type="checkbox"
                className="mr-2"
                checked={includeRetainer}
                onChange={(e) => setIncludeRetainer(e.target.checked)}
              />
              Include Retainer Service (R
              {
                pricingScheme.find((scheme) => scheme.name === selectedPackage)
                  ?.retainerCost
              }
              /month)
            </label>
          </div>
        )}

        {/* Optional message field */}
        <div className="space-y-3">
          <div>
            <label
              htmlFor="message"
              className="w-full  text-teal-900 mx-auto text-lg md:text-xl font-montserrat "
            >
              Additional Details
            </label>
            <p className="pb-1 font-montserrat "> (add extra pages here)</p>
          </div>
          <textarea
            id="message"
            className="w-full p-2 border rounded focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm focus:shadow"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any additional details or questions for your request"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-t to-teal-800 from-teal-900 text-white p-2 rounded hover:from-teal-800 hover:to-teal-700 transition-all shadow-teal-lg hover:shadow-xl"
        >
          Send Quote Request
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;

import { useState } from "react";
import { pricingScheme } from "../constants";
import axios from "axios";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    selectedPackage: "",
    selectedPages: [],
    message: "",
    includeRetainer: false,
  });

  const handleSendEmail = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8800/api/mail/service-email",
        { formData }
      );
      console.log("Mail sent successfully", response.data);
    } catch (error) {
      console.error("Failed to send mail", error);
    }
  };

  const handlePageSelection = (index, value) => {
    const newSelectedPages = [...formData.selectedPages];
    newSelectedPages[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      selectedPages: newSelectedPages,
    }));
  };

  const handlePackageChange = (e) => {
    const selectedPackageName = e.target.value;
    const defaultPages =
      selectedPackageName === "Single page website"
        ? ["Home", "About", "Contact", "Faq", "Services"]
        : ["Home", "About", "Contact", "Faq", "Projects"];

    setFormData((prevData) => ({
      ...prevData,
      selectedPackage: selectedPackageName,
      selectedPages: defaultPages,
    }));
  };

  const currentPackage = pricingScheme.find(
    (scheme) => scheme.name === formData.selectedPackage
  );

  const pageOptions = currentPackage?.pageOptions || [];

  return (
    <div className="md:mx-2 p-5 shadow-teal-lg">
      <form onSubmit={handleSendEmail} className="space-y-4">
        <h2 className="text-gray-700 font-bold text-2xl">Get Quoted</h2>

        <div className="space-y-3">
          <label
            htmlFor="package"
            className="text-teal-900 mx-auto text-lg font-montserrat"
          >
            Select a Package
          </label>
          <select
            id="package"
            className="w-full p-2 border rounded shadow-sm"
            value={formData.selectedPackage}
            onChange={handlePackageChange}
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

        {formData.selectedPackage && (
          <div className="space-y-3">
            <label className="text-teal-900 text-lg font-montserrat">
              Select Pages
            </label>
            {[...Array(currentPackage.basePagesOrSections)].map((_, index) => (
              <select
                key={index}
                className="w-full p-2 border rounded mb-2 shadow-sm"
                value={formData.selectedPages[index] || ""}
                onChange={(e) => handlePageSelection(index, e.target.value)}
                required
              >
                {pageOptions
                  .filter(
                    (page) =>
                      !formData.selectedPages.includes(page) ||
                      formData.selectedPages[index] === page
                  )
                  .map((page, i) => (
                    <option key={i} value={page}>
                      {page}
                    </option>
                  ))}
              </select>
            ))}
          </div>
        )}

        {formData.selectedPackage && (
          <div>
            <label
              htmlFor="retainerPackage"
              className="block font-semibold mb-2"
            >
              <input
                id="retainerPackage"
                type="checkbox"
                className="mr-2"
                checked={formData.includeRetainer}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    includeRetainer: e.target.checked,
                  }))
                }
              />
              Include Retainer Service (R{currentPackage.retainerCost}/month)
            </label>
          </div>
        )}

        <div className="space-y-3">
          <label
            htmlFor="message"
            className="text-teal-900 text-lg font-montserrat"
          >
            Additional Details
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded shadow-sm"
            value={formData.message}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                message: e.target.value,
              }))
            }
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

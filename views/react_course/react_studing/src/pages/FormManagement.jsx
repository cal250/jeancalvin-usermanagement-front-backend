
import ContactDetails from "../components/Contactdetail";
import GeneralInformation from "../components/Generalinformarion";
import { useState } from "react";

const FormManagement = () => {
  // State for form data
  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
  });

  const [contactData, setContactData] = useState({
    streetNumber: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
  });

  // Handle change in General Information form
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle change in Contact Details form
  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission for General Information
  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submit logic here
    console.log("Submitting General Information:", userData);
    // Example: Submit to backend or other actions
  };

  // Handle form submission for Contact Details
  const handleContactDetailsSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submit logic here
    console.log("Submitting Contact Details:", contactData);
    // Example: Submit to backend or other actions
  };

  return (
    <div className="flex justify-center space-x-4">
      <div className="flex-1">
        <GeneralInformation
          formData={userData}
          handleChange={handleGeneralInfoChange}
          handleSubmit={handleGeneralInfoSubmit}
        />
      </div>
      <div className="flex-1">
        <ContactDetails
          formData={contactData}
          handleChange={handleContactDetailsChange}
          handleSubmit={handleContactDetailsSubmit}
        />
      </div>
    </div>
  );
};

export default FormManagement;

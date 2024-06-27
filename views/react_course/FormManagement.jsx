
// import ContactDetails from "../components/ContactDetails";
import GeneralInformation from "../components/GeneralInformation";
import { useState } from "react";

const FormManagement = () => {
  // State for user data
  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
  });

  // State for contact data
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
//   const handleContactDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setContactData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  // Handle form submission for both General Information and Contact Details
  const handleSubmit = (e) => {
    e.preventDefault();

    // Merging both forms' data
    const formData = {
      ...userData,
      ...contactData,
    };

    // Submit the merged data to the backend
    fetch("http://localhost:5500/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user.");
        }
        console.log("User created successfully!");
        // Handle success (e.g., clear forms, show a message, navigate, etc.)
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center space-x-4">
      <div className="flex-1">
        <GeneralInformation
          formData={userData}
          handleChange={handleGeneralInfoChange}
        />
      </div>
      <div className="flex-1">
        {/* <ContactDetails
          formData={contactData}
          handleChange={handleContactDetailsChange}
        /> */}
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormManagement;

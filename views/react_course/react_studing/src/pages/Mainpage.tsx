import React from "react";
<<<<<<< HEAD
// import ContactDetails from "../components/Contactdetail";
// import GeneralInformation from "../components/Generalinformarion";
=======
import ContactDetails from "../components/Contactdetail";
import GeneralInformation from "../components/Generalinformarion";
>>>>>>> 33d0c5ee44dd0ed413a212c66c68d05ff329a618
// import FormManagement from "./FormManagement";

import UserTable from "../components/UserTable"; // Import UserTable component

function MainPage() {
  return (
    <div className="border h-[100vh] flex items-center justify-center">
      <div className="flex rounded-3xl shadow-md flex-wrap md:flex-nowrap">
        {/* <GeneralInformation /> */}
        {/* <ContactDetails /> */}
      </div>
      <div className="ml-8">
        {/* <FormManagement /> */}
        {/* <UserTable /> Render UserTable component here */}
      </div>
    </div>
  );
}

export default MainPage;
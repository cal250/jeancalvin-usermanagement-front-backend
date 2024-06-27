import React from "react";
// import ContactDetails from "../components/Contactdetail";
// import GeneralInformation from "../components/Generalinformarion";
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
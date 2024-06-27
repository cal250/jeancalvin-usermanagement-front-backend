import { useState } from "react";


function GeneralInformation() {

  const [formData, setFormData] = useState({
    title: "",
    firstname: "",
    position: "",
    company: "",
    businessarena: "",
    employee: "",
    street_nr: "",
    additionalinfo: "",
    zipcode: "",
    place: "",
    country: "",
    code: "",
    phonenumber: "",
    email: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev => {
      return { ...prev, [name]: value }
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5098/adduser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed")
        }
        console.log("added successfully");
        return response.json()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="px-4 lg:px-10 pt-8">
      <h3 className="text-lg font-semibold">General Information</h3>
      <form onSubmit={handleSubmit}>
        <select
          onChange={handleChange}
          name="title"
          id=""
          className="border-b border-gray-200 w-full outline-none my-3"
        >
          <option value="" className="text-base text-gray-400">title 1</option>
          <option value="" className="text-base text-gray-400">option 2</option>
        </select>
        <div className="flex w-full my-3 gap-8">
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            id=""
            placeholder="FirstName"
            className="flex-1 border-b outline-none placeholder:text-sm placeholder:text-gray-600"
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            id=""
            placeholder="LastName"
            className="flex-1 border-b outline-none placeholder:text-sm placeholder:text-gray-600"
          />
        </div>
        <select
          onChange={handleChange}
          name="position"
          id=""
          className="border-b border-gray-200 w-full outline-none my-2"
        >
          <option value="" className="text-xs text-gray-900">Position</option>
          <option value="" className="text-xs text-gray-900">option 2</option>
        </select>
        <input
          onChange={handleChange}
          type="text"
          name="company"
          id=""
          placeholder="Company"
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-black placeholder:text-sm"
        />
        <div className="flex gap-14 my-4">
          <input
            onChange={handleChange}
            type="text"
            name="businessarena"
            id=""
            placeholder="Business arena"
            className="flex-1 border-b border-gray-200 outline-none"
          />
          <select onChange={handleChange} name="employee" id="" className="outline-none">
            <option value="" className="text-xs text-black-900">employees</option>
            <option value="" className="text-xs text-black-900">option 2</option>
          </select>
        </div>
      </form>
      <div className="px-4 lg:px-10 pt-8 bg-blue-400 rounded-r-2xl">
        <h3 className="text-lg font-semibold text-white">Contact Details</h3>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="street_nr"
            id=""
            placeholder="Street + Nr"
            className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white placeholder:text-sm px-1 bg-blue-400 text-white"
          />
          <input
            onChange={handleChange}
            type="text"
            name="additionalinfo"
            id=""
            placeholder="Additional information"
            className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white placeholder:text-sm px-1 bg-blue-400 text-white"
          />
          <div className="flex my-4 gap-4">
            <input
              onChange={handleChange}
              type="number"
              name="zipcode"
              id=""
              placeholder="Zip code"
              className="border-b border-gray-200 outline-none w-[100px] px-1 bg-blue-400 text-white placeholder:text-white"
            />
            <select onChange={handleChange} name="place" id="" className="flex-1 outline-none px-1 bg-blue-400 text-white">
              <option value="" className="text-xs text-black-900">Place</option>
              <option value="" className="text-xs text-black-900">option 2</option>
            </select>
          </div>
          <select
            onChange={handleChange}
            name="country"
            id=""
            className="border-b border-gray-200 w-full outline-none my-3 px-1 bg-blue-400 text-white"
          >
            <option value="" className="text-base text-gray-400">Country</option>
            <option value="" className="text-base text-gray-400">option 2</option>
          </select>
          <div className="flex my-4 gap-4">
            <select name="code" id="" className="outline-none px-1 bg-blue-400 text-white">
              <option value="" className="text-xs text-black-900">Code</option>
              <option value="" className="text-xs text-black-900">option 2</option>
            </select>
            <input
              onChange={handleChange}
              type="number"
              name="phonenumber"
              id=""
              placeholder="Phone number"
              className="border-b border-gray-200 outline-none flex-1 px-1 bg-blue-400 text-white placeholder:text-white"
            />
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            id=""
            placeholder="Your Email"
            className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white placeholder:text-sm px-1 bg-blue-400 text-white"
          />
          <div className="flex gap-4 mt-10 text-white">
            <input type="checkbox" name="" id="" />
            <p className="text-xs">I do accept the <span className="font-semibold">Terms and Conditions</span> of your site</p>
          </div>
          <button type="submit" className="mt-8 mb-5 rounded-3xl bg-white py-1 px-4 border text-base font-semibold hover:scale-105">
            Register Badge
          </button>
        </form>
      </div>
    </div>
  );
}

export default GeneralInformation;
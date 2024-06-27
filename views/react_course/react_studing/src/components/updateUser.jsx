import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((Prev) => {
      return { ...Prev, [name]: value };
    });
  };
  useEffect(() => {
    fetch("http://localhost:5500/getUser/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No response");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5500/updateUser/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed",Error);
        }
        console.log("successfully sent data");
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  return (
    <div className="w-1/3 shadow mx-auto my-32">
      <form onSubmit={handleSubmit} className="space-y-6 px-12 py-6 ">
        <legend className="text-2xl ">General information</legend>
        <div>
          <label className="block px-2 text-gray-400">
            Title
          </label>
          <select
            value={user.title}
            name="title"
            id=""
            onChange={handleChange}
            className="outline-none border-b border-gray-200 w-[100%]"
            required
          >
            <option value=""></option>
            <option value="Manager">Manager</option>
            <option value="Stock Manager">Stock Manager</option>
            <option value="Executive Officer">Executive Officer</option>
          </select>
        </div>
        <div className="flex gap-3">
          <div>
            <label  className="block px-2 text-gray-400">
              FirstName
            </label>
            <input
              value={user.firstName}
              type="text"
              name="firstName"
              onChange={handleChange}
              className="border-b w-[100%] border-gray-200 outline-none focus:outline-none ps-4"
            />
          </div>
          <div>
            <label  className="block px-2 text-gray-400">
              LastName
            </label>
            <input
              value={user.lastName}
              type="text"
              onChange={handleChange}
              name="lastName"
              className="border-b border-gray-200 outline-none focus:outline-none ps-4"
            />
          </div>
        </div>
        <div>
          <label  className="block px-2 text-gray-400">
            Position
          </label>
          <select
            value={user.position}
            name="position"
            onChange={handleChange}
            id=""
            className="outline-none border-b border-gray-200 w-[100%]"
          >
            <option value=""></option>
            <option value="Senior">Senior</option>
            <option value="Junior">Junior</option>
          </select>
        </div>
        <div>
          <label className="block px-2 text-gray-400">
            Company
          </label>
          <input
            value={user.company}
            type="text"
            name="company"
            onChange={handleChange}
            className="border-b border-gray-200 outline-none focus:outline-none ps-4 w-[100%]"
          />
        </div>
        <div className="flex gap-12">
          <div>
            <label className="block px-2 text-gray-400">
              Business Arena
            </label>
            <input
              value={user.businessArena}
              type="text"
              onChange={handleChange}
              name="businessArena"
              className="border-b w-[100%] border-gray-200 outline-none focus:outline-none ps-4"
            />
          </div>
          <div>
            <label className="block px-2 text-gray-400">
              Employees
            </label>
            <select
              value={user.employees}
              name="employees"
              id=""
              onChange={handleChange}
              className="outline-none border-b border-gray-200 w-[100%]"
            >
              <option value=""></option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20+</option>
            </select>
          </div>
        </div>
        <div>
          <button className="px-4 py-2 bg-[#BA03FC] rounded text-white mx-auto my-12">
            Save Data
          </button>
        </div>
      </form>
    </div>
  );
}
export default UpdateUser;
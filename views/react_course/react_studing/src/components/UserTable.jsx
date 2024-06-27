import  { useEffect, useState } from "react";


const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from backend API
  useEffect(() => {
    fetch("http://localhost:5500/users") // Adjust the URL based on your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">User List</h2>
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Company</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.firstName} {user.lastName}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.phoneNumber}</td>
              <td className="py-2 px-4">{user.position}</td>
              <td className="py-2 px-4">{user.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

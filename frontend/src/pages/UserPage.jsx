import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { User, Mail, Shield } from "lucide-react";

function UserPage() {
  const { users, fetchUsers } = useAuthStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-200">
        User List
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 scroll-mx-px">
          <thead className="bg-gray-900 sticky top-0">
            <tr>
              <th className="py-3 px-2 text-left text-base font-medium text-white  items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                <span className=" ">Name</span>
              </th>
              <th className="py-3 px-2 text-left text-base font-medium text-white  items-center gap-2">
                <Mail className="w-5 h-5 text-green-400" />
                <span className=" ">Email</span>
              </th>
              <th className="py-3 px-2 text-left text-base font-medium text-white  items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className=" ">Role</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className={`border-t border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                  } hover:bg-gray-600 transition`}
                >
                  <td className="py-2 px-2 text-sm whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="py-2 px-2 text-sm whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="py-2 px-2 text-sm whitespace-nowrap">
                    {user.role}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-4 px-4 text-center text-gray-400 italic"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;

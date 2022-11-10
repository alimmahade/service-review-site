import React, { useContext } from "react";
import { ContextApi } from "../../Context/AuthProvider/AuthProvider";

const UserReview = () => {
  const { user } = useContext(ContextApi);
  const { displayName, email, photoURL } = user;
  console.log(user);
  return (
    <div>
      <h2 className="bg-secondary text-4xl font-semibold text-white m-4 p-4">
        Coustomer Review
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Review</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label></label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{displayName}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReview;

import React from "react";

export default function UserList({ list }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => (
            <tr key={index}>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

import React from "react";

function Result({ data }) {
  if (!data) {
    return (
      <div className="md:p-6 w-full bg-white shadow-md my-20">
        No data submitted yet.
      </div>
    );
  }
  console.log({ data });
  return (
    <div>
      <h3>Result:</h3>
      <p>Name: {data.data.name}</p>
      <p>Email: {data.data.email}</p>
      <p>Message: {data.data.message}</p>
      <p>Fav Color: {data.data.fav_color}</p>
      <p>Submit Date: {data.data.submit_date}</p>
      <p>Roles:</p>
      {data.data.roles.map(function (role) {
        return (
          <ul>
            <li>{role}</li>
          </ul>
        );
      })}
      <p>Uploaded File: {data.data.file}</p>
      <p>Age: {data.data.age}</p>
    </div>
  );
}

export default Result;

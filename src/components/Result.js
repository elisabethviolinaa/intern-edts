import React from "react";

// UI
const result_container = "rounded-lg shadow-md bg-white py-20 px-4 text-center";
const paragraph_font = "md:text-xl mb-5 text-gray-600";

function Result({ data }) {
  if (!data) {
    return (
      <div className="py-10 md:px-12 max-w-screen-2xl mx-auto text-center">
        <div className={result_container}>No data submitted yet.</div>
      </div>
    );
  }

  return (
    <div className="py-20 md:px-12 max-w-screen-2xl mx-auto text-center">
      <div className={result_container}>
        <h4 className="md:text-4xl font-bold pb-4">Form Result</h4>
        <p className={paragraph_font}>Name: {data.data.name}</p>
        <p className={paragraph_font}>Email: {data.data.email}</p>
        <p className={paragraph_font}>Uploaded File: {data.data.file}</p>
        <p className={paragraph_font}>Age: {data.data.age}</p>
        <p className={paragraph_font}>Submit Date: {data.data.submit_date}</p>
        <p className={paragraph_font}>Password: {data.data.password}</p>
        <p className={paragraph_font}>Message: {data.data.message}</p>
        <p className={paragraph_font}>Fav Color: {data.data.fav_color}</p>
        <p className={paragraph_font}>Roles:</p>
        {data.data.roles.map(function (role) {
          return (
            <ul>
              <li className={paragraph_font}>{role}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Result;

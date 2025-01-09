import React from "react";

const Error = ({ err }) => {
  return (
    <div className="error-container">
      <h1>OOPS!!!</h1>
      <h2>You got some error</h2>
      <h3>{err.status}: {err.statusText}</h3>
      {/* Check if err.error and err.error.message exist */}
      <h4>{err?.error?.message || "An unknown error occurred"}</h4>
    </div>
  );
};

export default Error;

import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("id")) {
      setId(localStorage.getItem("id"));
    } else {
      setId("");
    }
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();

    setId("");
    window.location.href = "/login";
  };
  return (
    <>
      <h1 className="alert alert-danger text-center">Hello Admin</h1>
      {id ? <button onClick={handleLogout}>logout</button> : null}
    </>
  );
};

export default Admin;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ModifStudent() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [studentId, setId] = useState();
  const [student, setStudent] = useState();

  const handleclick = (e) => {
    e.preventDefault();
    const stud = { studentId, name, adress };
    setStudent(stud);
    fetch(`http://localhost:8089/todolist/student/modif/${studentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then(() => {
        toast.success("Student is modified !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("there is a problem with fetch operation", error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <form className="row col-5 my-5 py-5 justify-content-center">
      <h5>Edit A Student</h5>
      <div className="input-group my-3">
        <input
          type="text"
          aria-label="Id"
          className="form-control"
          value={studentId}
          placeholder="Id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div className="input-group my-3">
        <input
          type="text"
          aria-label="Name"
          className="form-control"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="input-group my-3">
        <input
          type="text"
          aria-label="Adress"
          placeholder="Adress"
          className="form-control"
          value={adress}
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
      </div>
      <button
        className="btn btn-primary my-3 px-5 py-2 "
        type="submit"
        onClick={handleclick}
      >
        Submit
      </button>
      <ToastContainer />
    </form>
  );
}

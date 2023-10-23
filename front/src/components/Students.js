import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Students() {
  const [students, setStudents] = useState([]);
  async function deleteStudent(id) {
    await fetch(`http://localhost:8089/todolist/student/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        window.location.reload(false);
        toast.success("Student is deleted !", res, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("there is a problem with fetch operation", error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }
  useEffect(() => {
    fetch(" http://localhost:8089/todolist/student/getall")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      })
      .catch((error) => {
        toast.error("there is a problem with fetch operation", error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, []);

  return (
    <div className="row col-10 my-5 py-5">
      <button type="button" className="btn btn-success my-4 ">
        <NavLink className="link " to="/add">
          Add Student
        </NavLink>
      </button>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Adress</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <th scope="row">{student.studentId}</th>
                <td>{student.name}</td>
                <td>{student.adress}</td>
                <td>
                  <button
                    student={student}
                    type="button"
                    className="btn btn-info"
                  >
                    <NavLink className="link" to="/modif">
                      Edit
                    </NavLink>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteStudent(student.studentId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

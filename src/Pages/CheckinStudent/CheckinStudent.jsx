import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CheckinStudent = () => {
  const notify = () => toast("Checkin Student Success!");
  const handleForm = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const roll = event.target.roll.value;
  const checkinTime = new Date().getTime();
  const studentInfo = {
    name,
    roll,
    checkinTime,
  };
  fetch("http://localhost:5000/CheckinStudent", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(studentInfo),
  })
    .then((res) => res.json())
     .then((data) => {
      notify()
       event.target.reset();
    });
  }
    return (
      <div>
        <div className="w-1/2 mx-auto">
          <h2 className="text-center text-2xl">Checkin Student</h2>
          <form
            className="border border-primary p-2 rounded text-center my-2"
            onSubmit={handleForm}
          >
            <div className="name">
              <label>Enter Student Name:</label> <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Student Name......."
                className="input input-bordered w-full max-w-xs text-primary"
              />
            </div>
            <div className="roll mt-2">
              <label>Enter Student Roll Number:</label> <br />
              <input
                type="number"
                name="roll"
                placeholder="Enter Student Roll Number......"
                className="input input-bordered w-full max-w-xs text-primary"
              />
            </div>
            <div className="text-center my-2">
              <button className="btn btn-outline btn-accent" type="submit">
                Checkin
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
};

export default CheckinStudent;
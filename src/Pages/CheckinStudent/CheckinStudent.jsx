import React from 'react';

const CheckinStudent = () => {
    return (
      <div>
        <div className="w-1/2 mx-auto">
          <h2 className="text-center text-2xl">Checkin Student</h2>
          <form className="border border-primary p-2 rounded text-center my-2">
            <div className="name">
              <label>Enter Student Name:</label> <br />
              <input
                type="text"
                placeholder="Enter Student Name......."
                className="input input-bordered w-full max-w-xs text-primary"
              />
            </div>
            <div className="roll mt-2">
              <label>Enter Student Roll Number:</label> <br />
              <input
                type="number"
                placeholder="Enter Student Roll Number......"
                className="input input-bordered w-full max-w-xs text-primary"
              />
            </div>
            <div className="text-center my-2">
              <button className="btn btn-outline btn-accent">Checkin</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default CheckinStudent;
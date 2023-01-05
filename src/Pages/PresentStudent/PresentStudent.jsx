import React, { useEffect, useState } from "react";

const PresentStudent = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getPresentStudent`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, []); 
  return (
    <div>
      <h2 className="text-center font-bold text-xl">
        Total present student right now:{students.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-11/12 mx-auto text-center border border-primary">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
            students.map(student => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>
                    <button className="btn">CheckOut</button>
                  </td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PresentStudent;

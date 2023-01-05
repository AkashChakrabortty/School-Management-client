import React, { useEffect, useState } from "react";

const PresentStudent = () => {
  const [students, setStudents] = useState([]);
  const [reFetch,setReFetch] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/getPresentStudent`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, [reFetch]); 
  const handleCheckOut = (student) => {
 fetch(`http://localhost:5000/CheckOut/${student._id}`, {
   method: "DELETE"})
   .then((res) => res.json())
   .then((data) => {
    setReFetch(!reFetch)
   });
  }
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
              <th>Checkin time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>{new Date(student.checkinTime).toUTCString()}</td>
                  <td>
                    <button className="btn" onClick={()=>handleCheckOut(student)}>CheckOut</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PresentStudent;

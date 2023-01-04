import React from "react";

const PresentStudent = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-xl">
        Total present student right now:3
      </h2>

      <div className="overflow-x-auto">
        <table className="w-11/12 mx-auto text-center border border-primary">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Roll</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn">CheckOut</button>
              </td>
            </tr>

            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>
                <button className="btn">CheckOut</button>
              </td>
            </tr>

            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <button className="btn">CheckOut</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PresentStudent;

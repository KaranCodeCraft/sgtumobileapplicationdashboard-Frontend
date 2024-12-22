import React, { useState } from "react";
import StudentTable from "../../lib/Tables/UniversityStudents";

const StudentAcess = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddStudentClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Heading */}
      <div className="flex flex-row justify-between items-center bg-blue-600 p-2 text-white">
        <div className="text-xl font-semibold">Manage Students</div>
        <button
          className="px-2 py-1 bg-green-500 rounded-md hover:bg-green-600 text-white"
          onClick={handleAddStudentClick}
        >
          Add Student
        </button>
      </div>

      {/* Student Table */}
      <div className="flex-grow p-2 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg p-2">
          <StudentTable />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Add Student</h2>
              <p className="text-gray-400 text-sm underline">Upload Excel File</p>
              <button onClick={handleCloseModal} className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <input
              type="file"
              accept=".xlsx, .xls"
              className="border p-2 rounded-md w-full mb-4"
            />
            <button
              onClick={handleCloseModal}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAcess;
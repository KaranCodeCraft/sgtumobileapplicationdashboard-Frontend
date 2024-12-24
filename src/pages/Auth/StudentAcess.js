import React, { useContext, useState } from "react";
import StudentTable from "../../lib/Tables/UniversityStudents";
import ApiContext from "../../Context/ApiContext";
import axios from "axios";
import Swal from "sweetalert2";

const StudentAccess = () => {
  const { apiBaseUrl, token, fetchStudentData } = useContext(ApiContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAddStudentClick = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleBulkUpload = async () => {
    if (!selectedFile) {
      Swal.fire({
        title: "Missing File",
        text: "Please select a file to upload.",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${apiBaseUrl}bulkupload/students`,
        formData,
        config
      );

      if (response.status === 200) {
        fetchStudentData();
        Swal.fire({
          title: "Upload Successful",
          text: `${response.data.students.length} students uploaded successfully!`,
          icon: "success",
        }).then(() => {
          handleCloseModal();
        });

        
      } else if (response.status === 207) {
        fetchStudentData();
        Swal.fire({
          title: "Partial Upload",
          text: `Some students were uploaded successfully, but ${response.data.errors.length} records failed.`,
          icon: "success",
        });
        console.log("Failed Records:", response.data.errors);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Invalid Data",
          html: `
              <p>Some records were invalid: Kindly check the Format of the Excel</p>
          `,
          // html: `
          //   <p>Some records were invalid:</p>
          //   <ul>
          //     ${error.response.data.invalidStudents
          //       .map(
          //         (item) =>
          //           `<li>${item.student.name || "Unknown"}: ${item.errors.join(
          //             ", "
          //           )}</li>`
          //       )
          //       .join("")}
          //   </ul>`,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occurred while uploading the students.",
          icon: "error",
        });
        console.error("Error:", error);
      }
    }
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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Add Student</h2>
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
              onChange={handleFileChange}
            />
            <button
              onClick={handleBulkUpload}
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

export default StudentAccess;

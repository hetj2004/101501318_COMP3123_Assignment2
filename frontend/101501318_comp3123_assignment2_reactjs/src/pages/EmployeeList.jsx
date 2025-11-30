import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/client";
import { useEffect, useState } from "react";

export default function EmployeeList() {
  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");

  const fetchEmployees = async () => {
    const params = {};
    if (department) params.department = department;
    if (position) params.position = position;

    const res = await api.get("/emp", { params });
    return res.data;
  };

  const { data = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["employees", department, position],
    queryFn: fetchEmployees,
  });

  useEffect(() => {
    refetch();
  }, [department, position, refetch]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/emp/${id}`);
      alert("Employee deleted successfully");
      refetch();
    } catch (err) {
      alert("Failed to delete employee");
      console.error(err);
    }
  };

  if (isLoading) return <p>Loading employees...</p>;
  if (isError) return <p>Error loading employees</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employees</h2>

      {/* ✅ SEARCH SECTION */}
      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Search by Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          placeholder="Search by Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      {/* ✅ ACTION BUTTONS */}
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={() => navigate("/employees/add")}
          style={{ padding: "8px 12px", marginRight: "10px" }}
        >
          Add Employee
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          style={{ padding: "8px 12px", background: "black", color: "white" }}
        >
          Logout
        </button>
      </div>

      {/* ✅ EMPLOYEE TABLE */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="8">No employees found</td>
            </tr>
          ) : (
            data.map((emp) => (
              <tr key={emp._id}>
                {/* ✅ PROFILE IMAGE COLUMN */}
                <td>
                  {emp.profilePicture && (
                    <img
                      src={`http://localhost:8081/uploads/${emp.profilePicture}`}
                      alt="profile"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                    />
                  )}
                </td>

                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>{emp.salary}</td>

                <td>
                  <button
                    onClick={() => navigate(`/employees/edit/${emp._id}`)}
                    style={{ marginRight: "8px" }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(emp._id)}
                    style={{ background: "red", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

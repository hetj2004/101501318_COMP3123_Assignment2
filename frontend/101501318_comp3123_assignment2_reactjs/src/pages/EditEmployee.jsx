import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/client";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await api.get(`/emp/${id}`);
        setForm(res.data);
      } catch (err) {
        alert("Failed to load employee");
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/emp/${id}`, form);
      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (err) {
      alert("Failed to update employee");
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        <input name="firstName" value={form.firstName} onChange={handleChange} required />
        <input name="lastName" value={form.lastName} onChange={handleChange} required />
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
        <input name="department" value={form.department} onChange={handleChange} required />
        <input name="position" value={form.position} onChange={handleChange} required />
        <input name="salary" type="number" value={form.salary} onChange={handleChange} required />

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

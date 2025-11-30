import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/client";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    position: "",
    salary: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("department", form.department);
      formData.append("position", form.position);
      formData.append("salary", form.salary);

      if (image) {
        formData.append("profilePicture", image);
      }

      await api.post("/emp", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Employee added successfully!");
      navigate("/employees");
    } catch (err) {
      alert("Failed to add employee");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="department" placeholder="Department" onChange={handleChange} required />
        <input name="position" placeholder="Position" onChange={handleChange} required />
        <input name="salary" type="number" placeholder="Salary" onChange={handleChange} required />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

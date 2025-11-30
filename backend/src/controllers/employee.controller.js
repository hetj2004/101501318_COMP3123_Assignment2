import Employee from "../models/employee.model.js";

// ✅ CREATE EMPLOYEE
export const createEmployee = async (req, res) => {
  try {
    const employee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      department: req.body.department,
      position: req.body.position,
      salary: req.body.salary,
      profilePicture: req.file ? req.file.filename : null,
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Failed to add employee", error: err.message });
  }
};

// ✅ GET ALL EMPLOYEES (THIS WAS MISSING)
export const getAllEmployees = async (req, res) => {
  try {
    const { department, position } = req.query;

    let filter = {};

    if (department) {
      filter.department = department;
    }

    if (position) {
      filter.position = position;
    }

    const employees = await Employee.find(filter);
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};


// ✅ GET ONE EMPLOYEE
export const getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    res.json(emp);
  } catch (err) {
    res.status(404).json({ message: "Employee not found" });
  }
};

// ✅ UPDATE EMPLOYEE
export const updateEmployee = async (req, res) => {
  try {
    const updatedData = { ...req.body };

    if (req.file) {
      updatedData.profilePicture = req.file.filename;
    }

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update employee" });
  }
};

// ✅ DELETE EMPLOYEE
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete employee" });
  }
};

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditEmployee from "./pages/EditEmployee";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/employees/edit/:id" element={<EditEmployee />} />
  <Route path="/employees" element={<EmployeeList />} />
  <Route path="/employees/add" element={<AddEmployee />} />
</Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

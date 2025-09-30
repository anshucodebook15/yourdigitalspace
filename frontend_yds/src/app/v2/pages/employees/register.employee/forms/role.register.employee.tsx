import { useEmployee } from "../context/context.register.employee";
// import { useEmployee } from "./EmployeeContext";

const RoleStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Role
      </label>
      <select
        value={employee.auth.role}
        onChange={(e) =>
          setEmployee((prev) => ({
            ...prev,
            auth: { ...prev.auth, role: e.target.value as any },
          }))
        }
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
      >
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
        <option value="hr">HR</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleStep;

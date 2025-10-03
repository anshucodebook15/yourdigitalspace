// import React from "react";
import { useEmployee } from "../context/context.register.employee";

const SalaryStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();

  const handleChange = (
    field: keyof typeof employee.salaryStructure,
    value: number
  ) => {
    setEmployee((prev) => ({
      ...prev,
      salaryStructure: { ...prev.salaryStructure, [field]: value },
    }));
    validateStep("salary"); // live validate salary step
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Basic Salary */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Basic Salary
        </label>
        <input
          type="number"
          placeholder="Enter basic salary"
          value={employee.salaryStructure.basic}
          onChange={(e) => handleChange("basic", Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.salary?.basic && (
          <p className="text-red-500 text-xs">{stepErrors.salary.basic}</p>
        )}
      </div>

      {/* HRA */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          HRA
        </label>
        <input
          type="number"
          placeholder="Enter HRA"
          value={employee.salaryStructure.hra}
          onChange={(e) => handleChange("hra", Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.salary?.hra && (
          <p className="text-red-500 text-xs">{stepErrors.salary.hra}</p>
        )}
      </div>

      {/* Allowances */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Allowances
        </label>
        <input
          type="number"
          placeholder="Enter allowances"
          value={employee.salaryStructure.allowances}
          onChange={(e) => handleChange("allowances", Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.salary?.allowances && (
          <p className="text-red-500 text-xs">{stepErrors.salary.allowances}</p>
        )}
      </div>

      {/* Deductions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Deductions
        </label>
        <input
          type="number"
          placeholder="Enter deductions"
          value={employee.salaryStructure.deductions}
          onChange={(e) => handleChange("deductions", Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.salary?.deductions && (
          <p className="text-red-500 text-xs">
            {stepErrors.salary.deductions}
          </p>
        )}
      </div>
    </div>
  );
};

export default SalaryStep;

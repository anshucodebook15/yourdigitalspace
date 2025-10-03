import React, { useState } from "react";

import {
  EmployeeProvider,
  useEmployee,
} from "./context/context.register.employee";
import PersonalStep from "./forms/personal.register.employee";
import AddressStep from "./forms/address.register.employee";
import EmploymentStep from "./forms/employment.register.employee";
import BankStep from "./forms/bank.register.employee";
import SalaryStep from "./forms/salary.register.employee";
import RoleStep from "./forms/role.register.employee";
import CredentialsStep from "./forms/credentials.register.employee";
import { X } from "lucide-react";

const Child = () => {
  const { employee, SubmitEmployeeInfo } = useEmployee();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [step, setStep] = useState<number>(0);

  const steps = [
    { label: "Personal", component: <PersonalStep /> },
    { label: "Address", component: <AddressStep /> },
    { label: "Employment", component: <EmploymentStep /> },
    { label: "Bank", component: <BankStep /> },
    { label: "Salary", component: <SalaryStep /> },
    { label: "Role", component: <RoleStep /> },
    { label: "Credentials", component: <CredentialsStep /> },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Register Employee</h2>
        {/* <p className="text-sm text-gray-500">
          Fill in employee details step by step
        </p> */}
      </div>

      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            className={`cursor-pointer px-4 py-2 rounded-t-lg ${step === idx ? "border-b-2 border-black" : "text-gray-500"
              }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="space-y-4 px-2 min-h-80">{steps[step].component}</div>

      <div className="flex justify-between mt-6 border-t border-gray-200 pt-4 px-2">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          disabled={step === 0}
          className="px-4 py-2 border rounded-lg"
        >
          Prev
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              SubmitEmployeeInfo()
              console.log("Employee All details", employee);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            Submit
          </button>
        )}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Edit Department
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={18} />
              </button>
            </div>

            <pre>{JSON.stringify(employee)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

const EmployeeRegister: React.FC = () => {
  return (
    <EmployeeProvider>
      <Child />
    </EmployeeProvider>
  );
};

export default EmployeeRegister;

// EmployeeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { z } from "zod";

import PersonalStep from "../forms/personal.register.employee";
import AddressStep from "../forms/address.register.employee";
import EmploymentStep from "../forms/employment.register.employee";
import BankStep from "../forms/bank.register.employee";
import SalaryStep from "../forms/salary.register.employee";
import RoleStep from "../forms/role.register.employee";
import CredentialsStep from "../forms/credentials.register.employee";
import {
  authSchema,
  bankSchema,
  employmentSchema,
  personalSchema,
} from "../validations/useValidation.register.employee";

export interface EmployeeState {
  employeeId: string;
  personal: {
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  employment: {
    currentCompanyId: string;
    currentManagerId: string;
    designation: string;
    joiningDate: string;
    status?: string;
    workType?: string;
    transferHistory?: any[];
  };
  bankDetails: {
    accountHolder: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
    branch: string;
  };
  salaryStructure: {
    basic: number;
    hra: number;
    allowances: number;
    deductions: number;
  };
  auth: {
    googleId?: string;
    role: "employee" | "admin" | "hr" | "manager";
    password: string;
  };
}

export interface Step {
  label: string;
  component: ReactNode;
}

interface EmployeeContextProps {
  employee: EmployeeState;
  setEmployee: React.Dispatch<React.SetStateAction<EmployeeState>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  steps: Step[];
  validateStep: any;
  stepErrors: any;
  SubmitEmployeeInfo: any;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(
  undefined
);

export const useEmployee = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployee must be used within EmployeeProvider");
  }
  return context;
};

export const EmployeeProvider = ({ children }: { children: any }) => {
  const [employee, setEmployee] = useState<EmployeeState>({
    employeeId: "",
    personal: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "India",
      },
    },
    employment: {
      currentCompanyId: "",
      currentManagerId: "",
      designation: "",
      joiningDate: "",
      status: "",
      workType: "",
      transferHistory: [],
    },
    bankDetails: {
      accountHolder: "",
      accountNumber: "",
      ifscCode: "",
      bankName: "",
      branch: "",
    },
    salaryStructure: {
      basic: 0,
      hra: 0,
      allowances: 0,
      deductions: 0,
    },
    auth: {
      role: "employee",
      password: "",
    },
  });
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

  const [stepErrors, setStepErrors] = useState<
    Record<string, Record<string, string>>
  >({});

  const validateStep = (step: "personal" | "employment" | "bank" | "auth") => {
    let schema;
    let data;
    switch (step) {
      case "personal":
        schema = personalSchema;
        data = employee.personal;
        break;
      case "employment":
        schema = employmentSchema;
        data = employee.employment;
        break;
      case "bank":
        schema = bankSchema;
        data = employee.bankDetails;
        break;
      case "auth":
        schema = authSchema;
        data = employee.auth;
        break;
    }

    try {
      schema.parse(data);
      setStepErrors((prev) => ({ ...prev, [step]: {} }));
      return true;
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        console.log("err Isuues", err.issues);

        const formatted: Record<string, string> = {};
        err.issues.forEach((e) => {
          formatted[e.path.join(".")] = e.message;
        });
        console.log("Validation failed:", formatted);

        setStepErrors((prev) => ({ ...prev, [step]: formatted }));

        return false;
      }
    }
  };

  const SubmitEmployeeInfo = async () => {
    // Run validation for each step
    const personalValid = validateStep("personal");
    const employmentValid = validateStep("employment");
    const bankValid = validateStep("bank");
    const authValid = validateStep("auth");
    // 👉 add salary & role later if schemas exist

    if (personalValid && employmentValid && bankValid && authValid) {
      try {
        alert("everthing works Fine!");

        console.log(
          "✅ All validations passed, submitting employee:",
          employee
        );

        const res = await fetch("/api/employees/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee),
        });

        if (!res.ok) {
          throw new Error("Failed to register employee");
        }

        const data = await res.json();
        console.log("🎉 Employee registered:", data);
        return data;
      } catch (error) {
        console.error("❌ API Error:", error);
        throw error;
      }
    } else {
      alert("Something Are Not write!");
      console.warn("❌ Validation failed, not submitting");
      return null;
    }
  };

  console.log("stepErrors", stepErrors);

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
        step,
        setStep,
        steps,
        validateStep,
        stepErrors,
        SubmitEmployeeInfo,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

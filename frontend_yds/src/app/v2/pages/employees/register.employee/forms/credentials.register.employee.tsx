import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useEmployee } from "../context/context.register.employee";

const CredentialsStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (field: keyof typeof employee.auth, value: string) => {
    setEmployee((prev) => ({
      ...prev,
      auth: { ...prev.auth, [field]: value },
    }));
    validateStep("auth");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={employee.auth.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {stepErrors.auth?.password && (
          <p className="text-red-500 text-xs mt-1">
            {stepErrors.auth.password}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter password"
            // value={employee.auth.confirmPassword || ""}
            onChange={(e) =>
              handleChange("confirmPassword" as any, e.target.value)
            }
            className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {stepErrors.auth?.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {stepErrors.auth.confirmPassword}
          </p>
        )}
      </div>
    </div>
  );
};

export default CredentialsStep;

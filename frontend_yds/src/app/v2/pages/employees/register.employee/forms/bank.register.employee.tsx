import { useEmployee } from "../context/context.register.employee";

const BankStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();

  const handleChange = (
    field: keyof typeof employee.bankDetails,
    value: string
  ) => {
    setEmployee((prev) => ({
      ...prev,
      bankDetails: { ...prev.bankDetails, [field]: value },
    }));
    validateStep("bank"); // live validate
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Account Holder Name */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Account Holder Name
        </label>
        <input
          type="text"
          placeholder="Enter account holder name"
          value={employee.bankDetails.accountHolder}
          onChange={(e) => handleChange("accountHolder", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.bank?.accountHolder && (
          <p className="text-red-500 text-xs">
            {stepErrors.bank.accountHolder}
          </p>
        )}
      </div>

      {/* Account Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Account Number
        </label>
        <input
          type="text"
          placeholder="Enter account number"
          value={employee.bankDetails.accountNumber}
          onChange={(e) => handleChange("accountNumber", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.bank?.accountNumber && (
          <p className="text-red-500 text-xs">
            {stepErrors.bank.accountNumber}
          </p>
        )}
      </div>

      {/* IFSC Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          IFSC Code
        </label>
        <input
          type="text"
          placeholder="Enter IFSC code"
          value={employee.bankDetails.ifscCode}
          onChange={(e) => handleChange("ifscCode", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.bank?.ifscCode && (
          <p className="text-red-500 text-xs">{stepErrors.bank.ifscCode}</p>
        )}
      </div>

      {/* Bank Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bank Name
        </label>
        <input
          type="text"
          placeholder="Enter bank name"
          value={employee.bankDetails.bankName}
          onChange={(e) => handleChange("bankName", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.bank?.bankName && (
          <p className="text-red-500 text-xs">{stepErrors.bank.bankName}</p>
        )}
      </div>

      {/* Branch */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Branch
        </label>
        <input
          type="text"
          placeholder="Enter branch name"
          value={employee.bankDetails.branch}
          onChange={(e) => handleChange("branch", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.bank?.branch && (
          <p className="text-red-500 text-xs">{stepErrors.bank.branch}</p>
        )}
      </div>
    </div>
  );
};

export default BankStep;

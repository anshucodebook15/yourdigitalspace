import { useEmployee } from "../context/context.register.employee";

const EmploymentStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();

  const handleChange = (
    field: keyof typeof employee.employment,
    value: string
  ) => {
    setEmployee((prev) => ({
      ...prev,
      employment: { ...prev.employment, [field]: value },
    }));
    validateStep("employment"); // live validate
  };

  // Sample dropdown data
  const companies = ["Company A", "Company B", "Company C"];
  const managers = ["none", "Ashok", "Vineet", "Rahul"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Company ID */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <select
          value={employee.employment.currentCompanyId}
          onChange={(e) => handleChange("currentCompanyId", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select Company</option>
          {companies.map((company, idx) => (
            <option key={idx} value={company}>
              {company}
            </option>
          ))}
        </select>
        {stepErrors.employment?.currentCompanyId && (
          <p className="text-red-500 text-xs">
            {stepErrors.employment.currentCompanyId}
          </p>
        )}
      </div>

      {/* Manager ID */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Manager
        </label>
        <select
          value={employee.employment.currentManagerId}
          onChange={(e) => handleChange("currentManagerId", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select Manager</option>
          {managers.map((manager, idx) => (
            <option key={idx} value={manager}>
              {manager}
            </option>
          ))}
        </select>
        {stepErrors.employment?.currentManagerId && (
          <p className="text-red-500 text-xs">
            {stepErrors.employment.currentManagerId}
          </p>
        )}
      </div>

      {/* Designation */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Designation
        </label>
        <input
          type="text"
          placeholder="e.g. Software Engineer"
          value={employee.employment.designation}
          onChange={(e) => handleChange("designation", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.employment?.designation && (
          <p className="text-red-500 text-xs">
            {stepErrors.employment.designation}
          </p>
        )}
      </div>

      {/* Joining Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Joining Date
        </label>
        <input
          type="date"
          value={employee.employment.joiningDate}
          onChange={(e) => handleChange("joiningDate", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.employment?.joiningDate && (
          <p className="text-red-500 text-xs">
            {stepErrors.employment.joiningDate}
          </p>
        )}
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={employee.employment.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="probation">Probation</option>
          <option value="inactive">Inactive</option>
        </select>
        {stepErrors.employment?.status && (
          <p className="text-red-500 text-xs">{stepErrors.employment.status}</p>
        )}
      </div>

      {/* Work Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Work Type
        </label>
        <select
          value={employee.employment.workType}
          onChange={(e) => handleChange("workType", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select Work Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="intern">Intern</option>
          <option value="contract">Contract</option>
        </select>
        {stepErrors.employment?.workType && (
          <p className="text-red-500 text-xs">
            {stepErrors.employment.workType}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmploymentStep;

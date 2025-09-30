import { useEmployee } from "../context/context.register.employee";

const PersonalStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();

  const handleChange = (
    field: keyof typeof employee.personal,
    value: string
  ) => {
    setEmployee((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
    validateStep("personal"); // live validate
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          value={employee.personal.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.firstName && (
          <p className="text-red-500 text-xs">
            {stepErrors.personal.firstName}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Enter last name"
          value={employee.personal.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.lastName && (
          <p className="text-red-500 text-xs">{stepErrors.personal.lastName}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          value={employee.personal.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.dob && (
          <p className="text-red-500 text-xs">{stepErrors.personal.dob}</p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <select
          value={employee.personal.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {stepErrors.personal?.gender && (
          <p className="text-red-500 text-xs">{stepErrors.personal.gender}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={employee.personal.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.email && (
          <p className="text-red-500 text-xs">{stepErrors.personal.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={employee.personal.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.phone && (
          <p className="text-red-500 text-xs">{stepErrors.personal.phone}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalStep;

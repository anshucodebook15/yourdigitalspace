import React, { useState } from "react";
import { Clipboard, Pencil } from "lucide-react";

const EmployeeTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 6;

  const employees = [
    {
      id: "EMP001",
      initials: "SJ",
      name: "Sarah Johnson",
      department: "Engineering",
      role: "Senior Developer",
      email: "sarah.johnson@example.com",
      phone: "+1 555-123-4567",
      workType: "Full-time",
    },
    {
      id: "EMP002",
      initials: "MC",
      name: "Michael Chen",
      department: "Marketing",
      role: "Marketing Manager",
      email: "michael.chen@example.com",
      phone: "+1 555-234-5678",
      workType: "Part-time",
    },
    {
      id: "EMP003",
      initials: "ER",
      name: "Emily Rodriguez",
      department: "Sales",
      role: "Sales Representative",
      email: "emily.rodriguez@example.com",
      phone: "+1 555-345-6789",
      workType: "Contract",
    },
    {
      id: "EMP004",
      initials: "DT",
      name: "David Thompson",
      department: "Engineering",
      role: "DevOps Engineer",
      email: "david.thompson@example.com",
      phone: "+1 555-456-7890",
      workType: "Full-time",
    },
    {
      id: "EMP005",
      initials: "LW",
      name: "Lisa Wang",
      department: "Design",
      role: "UI/UX Designer",
      email: "lisa.wang@example.com",
      phone: "+1 555-567-8901",
      workType: "Freelance",
    },
    {
      id: "EMP006",
      initials: "JM",
      name: "James Miller",
      department: "Operations",
      role: "Operations Manager",
      email: "james.miller@example.com",
      phone: "+1 555-678-9012",
      workType: "Full-time",
    },
    {
      id: "EMP007",
      initials: "AK",
      name: "Anna Kowalski",
      department: "HR",
      role: "HR Specialist",
      email: "anna.kowalski@example.com",
      phone: "+1 555-789-0123",
      workType: "Full-time",
    },
    {
      id: "EMP008",
      initials: "RG",
      name: "Robert Garcia",
      department: "Finance",
      role: "Financial Analyst",
      email: "robert.garcia@example.com",
      phone: "+1 555-890-1234",
      workType: "Contract",
    },
    {
      id: "EMP009",
      initials: "AS",
      name: "Amit Singh",
      department: "Support",
      role: "Support Engineer",
      email: "amit.singh@example.com",
      phone: "+1 555-901-2345",
      workType: "Full-time",
    },
    {
      id: "EMP010",
      initials: "KB",
      name: "Kate Brown",
      department: "Legal",
      role: "Legal Advisor",
      email: "kate.brown@example.com",
      phone: "+1 555-012-3456",
      workType: "Part-time",
    },
  ];

  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Employees</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-[0.9rem] text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Work Type</th>
              <th className="px-4 py-2 text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                {/* Employee */}
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold">
                    {emp.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[16px] text-gray-900">
                      {emp.name}
                    </p>
                    <div className="flex gap-1 items-center bg-amber-100 w-fit">
                      <p className="text-[12px] text-gray-800 ">{emp.id}</p>
                      <Clipboard
                        strokeWidth={0.75}
                        size={12}
                        className="inline-block cursor-pointer text-gray-600"
                      />
                    </div>
                  </div>
                </td>

                {/* Department */}
                <td className="px-4 py-3">
                  <p className="font-bold text-[15px]">{emp.department}</p>
                  <p className="text-xs text-gray-500 text-[14px]">
                    {emp.role}
                  </p>
                </td>

                {/* Email */}
                <td className="px-4 py-3 text-gray-700 text-[16px] font-medium">
                  {emp.email}
                </td>

                {/* Phone */}
                <td className="px-4 py-3 text-gray-700 text-[16px] font-medium">
                  {emp.phone}
                </td>

                {/* Work Type */}
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-[13px] bg-blue-50 text-blue-700 rounded-md">
                    {emp.workType}
                  </span>
                </td>

                {/* Edit */}
                <td className="px-4 py-3 text-center">
                  <button className="p-2 bg-gray-100 cursor-pointer rounded-full hover:bg-gray-200 transition">
                    <Pencil size={14} className="text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>
          Showing {indexOfFirst + 1}-{Math.min(indexOfLast, employees.length)}{" "}
          of {employees.length} employees
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 border rounded-md disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;

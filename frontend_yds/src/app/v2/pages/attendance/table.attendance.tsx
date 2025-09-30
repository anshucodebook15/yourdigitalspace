import React, { useState } from "react";

const AttendanceTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 6;

  const employees = [
    {
      id: "EMP001",
      initials: "SJ",
      name: "Sarah Johnson",
      department: "Engineering",
      role: "Senior Developer",
      checkIn: "09:00 AM",
      checkOut: "06:15 PM",
      status: "Present",
      hours: "8.25h",
      overtime: "+0.25h",
    },
    {
      id: "EMP002",
      initials: "MC",
      name: "Michael Chen",
      department: "Marketing",
      role: "Marketing Manager",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      status: "Late",
      hours: "7.5h",
      overtime: "",
    },
    {
      id: "EMP003",
      initials: "ER",
      name: "Emily Rodriguez",
      department: "Sales",
      role: "Sales Representative",
      checkIn: "08:45 AM",
      checkOut: "06:30 PM",
      status: "Present",
      hours: "8.75h",
      overtime: "+0.75h",
    },
    {
      id: "EMP004",
      initials: "DT",
      name: "David Thompson",
      department: "Engineering",
      role: "DevOps Engineer",
      checkIn: "",
      checkOut: "",
      status: "Absent",
      hours: "0h",
      overtime: "",
    },
    {
      id: "EMP005",
      initials: "LW",
      name: "Lisa Wang",
      department: "Design",
      role: "UI/UX Designer",
      checkIn: "09:30 AM",
      checkOut: "06:00 PM",
      status: "Late",
      hours: "7.5h",
      overtime: "",
    },
    {
      id: "EMP006",
      initials: "JM",
      name: "James Miller",
      department: "Operations",
      role: "Operations Manager",
      checkIn: "08:30 AM",
      checkOut: "05:30 PM",
      status: "Present",
      hours: "8h",
      overtime: "",
    },
    {
      id: "EMP007",
      initials: "AK",
      name: "Anna Kowalski",
      department: "HR",
      role: "HR Specialist",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
      hours: "8h",
      overtime: "",
    },
    {
      id: "EMP008",
      initials: "RG",
      name: "Robert Garcia",
      department: "Finance",
      role: "Financial Analyst",
      checkIn: "08:45 AM",
      checkOut: "07:15 PM",
      status: "Present",
      hours: "9.5h",
      overtime: "+1.5h",
    },
    {
      id: "EMP009",
      initials: "AS",
      name: "Amit Singh",
      department: "Support",
      role: "Support Engineer",
      checkIn: "09:10 AM",
      checkOut: "06:20 PM",
      status: "Late",
      hours: "8h",
      overtime: "",
    },
    {
      id: "EMP010",
      initials: "KB",
      name: "Kate Brown",
      department: "Legal",
      role: "Legal Advisor",
      checkIn: "08:50 AM",
      checkOut: "06:10 PM",
      status: "Present",
      hours: "8.25h",
      overtime: "+0.25h",
    },
  ];

  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(employees.length / employeesPerPage);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">
          Today's Employee Attendance
        </h2>
        {/* <p className="text-sm text-gray-500 mb-4">
                    Today's attendance overview for all employees
                </p> */}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-[0.9rem] text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Check In</th>
              <th className="px-4 py-2">Check Out</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Hours</th>
              <th className="px-4 py-2">Overtime</th>
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
                    <p className="text-xs text-gray-500">{emp.id}</p>
                  </div>
                </td>

                {/* Department */}
                <td className="px-4 py-3">
                  <p className="font-bold text-[15px]">{emp.department}</p>
                  {/* <p className="text-xs text-gray-500 text-[14px]">
                    {emp.role}
                  </p> */}
                </td>

                {/* Check In */}
                <td className="px-4 py-3 font-bold">
                  {emp.checkIn ? (
                    <span className="px-2 py-1 text-[13px] bg-green-50 text-green-700 rounded-md">
                      {emp.checkIn}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Check Out */}
                <td className="px-4 py-3 font-bold">
                  {emp.checkOut ? (
                    <span className="px-2 py-1 text-[13px] bg-blue-50 text-blue-700 rounded-md">
                      {emp.checkOut}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  {emp.status === "Present" && (
                    <span className="px-2 py-1 text-[13px] font-semibold bg-green-600 text-white rounded-md">
                      Present
                    </span>
                  )}
                  {emp.status === "Late" && (
                    <span className="px-2 py-1 text-[13px] font-semibold bg-yellow-100 text-yellow-700 rounded-md">
                      Late
                    </span>
                  )}
                  {emp.status === "Absent" && (
                    <span className="px-2 py-1 text-[13px] font-semibold bg-red-600 text-white rounded-md">
                      Absent
                    </span>
                  )}
                </td>

                {/* Hours */}
                <td className="px-4 py-3">{emp.hours}</td>

                {/* Overtime */}
                <td className="px-4 py-3">
                  {emp.overtime ? (
                    <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-md">
                      {emp.overtime}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>
          Showing {indexOfFirst + 1}-{indexOfLast} of {employees.length}{" "}
          employees
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

export default AttendanceTable;

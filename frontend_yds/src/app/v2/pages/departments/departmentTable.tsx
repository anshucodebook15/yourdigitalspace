import React, { useState } from "react";
import { Pencil, Plus, Search, X } from "lucide-react";

const DepartmentTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Engineering",
      description: "Handles software development and infrastructure",
    },
    {
      id: 2,
      name: "Human Resources",
      description: "Manages employee relations, hiring, and payroll",
    },
    {
      id: 3,
      name: "Marketing",
      description: "Promotes company products and brand awareness",
    },
    {
      id: 4,
      name: "Finance",
      description: "Responsible for budgeting, audits, and accounts",
    },
    {
      id: 5,
      name: "Operations",
      description: "Oversees daily business processes and logistics",
    },
    {
      id: 6,
      name: "Design",
      description: "Creates product and brand design systems",
    },
    {
      id: 7,
      name: "Legal",
      description: "Handles compliance, contracts, and regulations",
    },
  ]);

  // Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [editingDept, setEditingDept] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", description: "" });

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentDepartments = departments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(departments.length / itemsPerPage);

  // Edit modal
  const handleEdit = (dept: any) => {
    setEditingDept(dept);
    setFormData({ name: dept.name, description: dept.description });
    setIsEditModalOpen(true);
  };

  const handleUpdate = () => {
    setDepartments((prev) =>
      prev.map((d) =>
        d.id === editingDept.id
          ? { ...d, name: formData.name, description: formData.description }
          : d
      )
    );
    setIsEditModalOpen(false);
  };

  // Add modal
  const handleAddDepartment = () => {
    if (!formData.name.trim()) return;
    const newDept = {
      id: departments.length + 1,
      name: formData.name,
      description: formData.description,
    };
    setDepartments((prev) => [...prev, newDept]);
    setIsAddModalOpen(false);
    setFormData({ name: "", description: "" });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      {/* Table Header Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Add Departments</h2>
          <p className="text-sm text-gray-500 mb-4">
            You can Add or filter departments here
          </p>
        </div>

        <div className="flex justify-end items-center gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search departments..."
              className="pl-9 pr-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40 sm:w-56 md:w-64"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={() => {
              setFormData({ name: "", description: "" });
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-semibold text-sm hover:bg-gray-900 transition cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add department</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-base text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-5 py-3">
                <label className="label">
                  <input
                    type="checkbox"
                    size={6}
                    className="w-[18px] h-[18px] checkbox checkbox-neutral"
                  />
                </label>
              </th>
              <th className="px-5 py-3">Department Name</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3 text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            {currentDepartments.map((dept) => (
              <tr
                key={dept.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-5 py-3">
                  <label className="label">
                    <input
                      type="checkbox"
                      size={6}
                      className="w-[18px] h-[18px] checkbox checkbox-neutral"
                    />
                  </label>
                </td>
                <td className="px-5 py-3 font-semibold text-gray-900">
                  {dept.name}
                </td>
                <td className="px-5 py-3 text-gray-600">{dept.description}</td>
                <td className="px-5 py-3 text-center">
                  <button
                    onClick={() => handleEdit(dept)}
                    className="p-2 bg-gray-100 cursor-pointer rounded-full hover:bg-gray-200 transition"
                  >
                    <Pencil size={14} className="text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
        <p>
          Showing {indexOfFirst + 1}-{Math.min(indexOfLast, departments.length)}{" "}
          of {departments.length} departments
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-3 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
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

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Department Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                rows={3}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Add Department
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Department Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                rows={3}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddDepartment}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentTable;

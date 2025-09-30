// validation.employee.ts
import { z } from "zod";

export const personalSchema = z.object({
  firstName: z.string().min(6, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

export const employmentSchema = z.object({
  // department: z.string().min(1, "Department is required"),
  // role: z.enum(["employee", "manager", "hr", "admin"]),
});

export const bankSchema = z.object({
  accountHolder: z.string().min(1, "Account holder required"),
  accountNumber: z.string().min(6, "Account number required"),
  ifscCode: z.string().min(6, "IFSC code required"),
  bankName: z.string().min(1, "Bank name required"),
  branch: z.string().min(1, "Branch required"),
});

export const authSchema = z
  .object({
    // employeeId: z.string().min(1, "Employee ID required"),
    // username: z.string().min(1, "Username required"),
    password: z.string().min(6, "Password must be 6+ characters"),
    confirmPassword: z.string().min(6, "Confirm password required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

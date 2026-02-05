
export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Completed';
  dueDate: string;
}

export interface LeaveRecord {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  days: number;
}

export interface Payslip {
  id: string;
  month: string;
  year: number;
  amount: string;
  status: 'Paid';
}

export interface LeaveBalance {
  total: number;
  taken: number;
  pending: number;
  available: number;
}

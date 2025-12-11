export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  avatar?: string;
  joinedAt: string;
}

export interface AnalyticsData {
  date: string;
  revenue: number;
  users: number;
  sessions: number;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  trend: "up" | "down";
  icon?: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    role: "Admin",
    status: "active",
    joinedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Editor",
    status: "active",
    joinedAt: "2024-02-20",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    email: "m.rodriguez@example.com",
    role: "Viewer",
    status: "inactive",
    joinedAt: "2024-03-10",
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    role: "Editor",
    status: "active",
    joinedAt: "2024-03-22",
  },
  {
    id: "5",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Viewer",
    status: "pending",
    joinedAt: "2024-04-05",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    role: "Admin",
    status: "active",
    joinedAt: "2024-04-12",
  },
  {
    id: "7",
    name: "James Wilson",
    email: "james.w@example.com",
    role: "Editor",
    status: "active",
    joinedAt: "2024-05-01",
  },
  {
    id: "8",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    role: "Viewer",
    status: "inactive",
    joinedAt: "2024-05-15",
  },
];

export const mockAnalyticsData: AnalyticsData[] = [
  { date: "Jan", revenue: 4500, users: 240, sessions: 1200 },
  { date: "Feb", revenue: 5200, users: 280, sessions: 1450 },
  { date: "Mar", revenue: 6100, users: 320, sessions: 1680 },
  { date: "Apr", revenue: 5800, users: 310, sessions: 1590 },
  { date: "May", revenue: 7200, users: 380, sessions: 1920 },
  { date: "Jun", revenue: 8100, users: 420, sessions: 2150 },
  { date: "Jul", revenue: 7800, users: 410, sessions: 2080 },
  { date: "Aug", revenue: 8900, users: 460, sessions: 2340 },
  { date: "Sep", revenue: 9500, users: 490, sessions: 2520 },
  { date: "Oct", revenue: 10200, users: 530, sessions: 2710 },
  { date: "Nov", revenue: 11000, users: 570, sessions: 2920 },
  { date: "Dec", revenue: 12500, users: 640, sessions: 3280 },
];

export const mockMetrics: MetricCard[] = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: 12.5,
    trend: "up",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: 8.2,
    trend: "up",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: -2.1,
    trend: "down",
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: 5.7,
    trend: "up",
  },
];

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  type: "user" | "system" | "billing";
}

export const mockActivities: Activity[] = [
  {
    id: "1",
    user: "Alex Morgan",
    action: "Updated project settings",
    timestamp: "2024-12-11T10:30:00",
    type: "user",
  },
  {
    id: "2",
    user: "System",
    action: "Automated backup completed",
    timestamp: "2024-12-11T09:15:00",
    type: "system",
  },
  {
    id: "3",
    user: "Sarah Chen",
    action: "Created new dashboard",
    timestamp: "2024-12-11T08:45:00",
    type: "user",
  },
  {
    id: "4",
    user: "Billing",
    action: "Payment received - $299",
    timestamp: "2024-12-10T16:20:00",
    type: "billing",
  },
  {
    id: "5",
    user: "Emily Johnson",
    action: "Invited 3 new team members",
    timestamp: "2024-12-10T14:10:00",
    type: "user",
  },
];

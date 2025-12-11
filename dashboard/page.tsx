import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/metric-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import {
  mockMetrics,
  mockActivities,
  mockAnalyticsData,
} from "@/lib/data/mock-data";
import { DollarSign, Users, Activity, Clock } from "lucide-react";

const iconMap = {
  "Total Revenue": <DollarSign className="h-4 w-4 text-muted-foreground" />,
  "Active Users": <Users className="h-4 w-4 text-muted-foreground" />,
  "Conversion Rate": <Activity className="h-4 w-4 text-muted-foreground" />,
  "Avg. Session": <Clock className="h-4 w-4 text-muted-foreground" />,
};

export default function DashboardPage() {
  const recentData = mockAnalyticsData.slice(-6);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mockMetrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            icon={iconMap[metric.title as keyof typeof iconMap]}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm">Chart visualization</p>
                <p className="text-xs mt-1">See Analytics page for detailed charts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentData.slice(-3).map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{data.date}</p>
                    <p className="text-xs text-muted-foreground">
                      {data.users} users
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">${data.revenue}</p>
                    <p className="text-xs text-muted-foreground">
                      {data.sessions} sessions
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <ActivityFeed activities={mockActivities} />
    </div>
  );
}

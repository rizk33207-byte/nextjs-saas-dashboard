import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";
import { Activity } from "@/lib/data/mock-data";

interface ActivityFeedProps {
  activities: Activity[];
}

const activityTypeColors = {
  user: "default",
  system: "secondary",
  billing: "success",
} as const;

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-muted-foreground"> {activity.action}</span>
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant={activityTypeColors[activity.type]} className="text-xs">
                    {activity.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatRelativeTime(activity.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

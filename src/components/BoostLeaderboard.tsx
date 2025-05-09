
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface LeaderboardUser {
  id: string;
  name: string;
  avatar?: string;
  amount: number;
  badge?: string;
}

const topBoosters: LeaderboardUser[] = [
  {
    id: "1",
    name: "Sophia Chen",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: 824,
    badge: "diamond"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: 756,
    badge: "platinum"
  },
  {
    id: "3",
    name: "Olivia Wang",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: 659
  },
  {
    id: "4",
    name: "Ethan Parker",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: 541
  },
  {
    id: "5",
    name: "Ava Wong",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: 483
  }
];

const getBadgeIcon = (badge?: string) => {
  if (badge === "diamond") return "Diamond";
  if (badge === "platinum") return "Award";
  return null;
};

export default function BoostLeaderboard() {
  return (
    <Card className="border border-[#eaeaea]">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Icon name="Medal" className="mr-2 h-5 w-5 text-amber-500" />
          Top Boosters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topBoosters.map((user, index) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 text-sm font-medium text-muted-foreground">
                  {index + 1}
                </div>
                <Avatar className="h-8 w-8 border border-[#eaeaea]">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <span className="font-medium">{user.name}</span>
                  {user.badge && (
                    <Icon 
                      name={getBadgeIcon(user.badge) || "Award"} 
                      size={14} 
                      className={`ml-1 ${user.badge === "diamond" ? "text-blue-500" : "text-amber-500"}`} 
                    />
                  )}
                </div>
              </div>
              <div className="font-medium text-primary">${user.amount}</div>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-4 text-muted-foreground border-[#eaeaea]"
        >
          View Full Leaderboard
        </Button>
      </CardContent>
    </Card>
  );
}

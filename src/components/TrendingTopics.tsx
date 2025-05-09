
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const trendingTopics = [
  { 
    name: "Startups", 
    count: 1243, 
    icon: "Rocket",
    color: "bg-amber-100 text-amber-600" 
  },
  { 
    name: "Education", 
    count: 842, 
    icon: "GraduationCap",
    color: "bg-blue-100 text-blue-600" 
  },
  { 
    name: "Charity", 
    count: 695, 
    icon: "Heart",
    color: "bg-rose-100 text-rose-600" 
  },
  { 
    name: "Technology", 
    count: 512, 
    icon: "Cpu",
    color: "bg-violet-100 text-violet-600" 
  },
  { 
    name: "Art", 
    count: 438, 
    icon: "Palette",
    color: "bg-indigo-100 text-indigo-600" 
  }
];

export default function TrendingTopics() {
  return (
    <Card className="border border-[#eaeaea]">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Icon name="TrendingUp" className="mr-2 h-5 w-5 text-primary" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <Badge 
              key={topic.name} 
              variant="outline" 
              className={`px-3 py-1 cursor-pointer hover:shadow-sm transition-shadow ${topic.color}`}
            >
              <Icon name={topic.icon} className="mr-1 h-3 w-3" />
              {topic.name}
              <span className="ml-1 text-xs">({topic.count})</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

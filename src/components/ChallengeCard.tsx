
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface ChallengeCardProps {
  title: string;
  description: string;
  reward: string;
  daysLeft: number;
  participants: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

export default function ChallengeCard({
  title,
  description,
  reward,
  daysLeft,
  participants,
  category,
  difficulty
}: ChallengeCardProps) {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy": return "bg-green-100 text-green-700";
      case "medium": return "bg-amber-100 text-amber-700";
      case "hard": return "bg-rose-100 text-rose-700";
      default: return "bg-blue-100 text-blue-700";
    }
  };

  const getCategoryIcon = () => {
    switch (category.toLowerCase()) {
      case "business": return "Briefcase";
      case "tech": return "Cpu";
      case "education": return "GraduationCap";
      case "creative": return "Palette";
      default: return "Zap";
    }
  };

  return (
    <Card className="border border-[#eaeaea] overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary to-purple-500" />
      <CardHeader className="py-4 flex flex-row items-center justify-between">
        <div>
          <Badge className={`mr-2 ${getDifficultyColor()}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
          <Badge variant="outline" className="bg-background flex items-center">
            <Icon name={getCategoryIcon()} className="mr-1 h-3 w-3" />
            {category}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Clock" className="mr-1 h-4 w-4" />
          {daysLeft} days left
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Icon name="Trophy" className="h-5 w-5 text-amber-500" />
            <span className="font-medium">{reward}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Users" className="mr-1 h-4 w-4" />
            {participants} participants
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/20 justify-between gap-2">
        <Button variant="ghost" size="sm" className="w-1/2">
          <Icon name="Info" className="mr-1 h-4 w-4" />
          Details
        </Button>
        <Button size="sm" className="w-1/2 bg-primary hover:bg-primary/90">
          <Icon name="Zap" className="mr-1 h-4 w-4" />
          Join Challenge
        </Button>
      </CardFooter>
    </Card>
  );
}

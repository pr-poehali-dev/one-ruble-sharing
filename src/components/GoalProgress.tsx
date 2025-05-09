
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface GoalProgressProps {
  title: string;
  currentAmount: number;
  targetAmount: number;
  currency?: string;
  backers?: number;
  deadline?: string;
}

export default function GoalProgress({
  title,
  currentAmount,
  targetAmount,
  currency = "$",
  backers = 0,
  deadline
}: GoalProgressProps) {
  const progress = Math.min(Math.round((currentAmount / targetAmount) * 100), 100);
  
  // Calculate remaining days
  const daysRemaining = deadline ? 
    Math.max(0, Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24))) : null;

  return (
    <Card className="border border-[#eaeaea] overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-violet-100 to-blue-100 pb-3">
        <CardTitle className="text-base flex items-center">
          <Icon name="Target" className="mr-2 h-5 w-5 text-primary" />
          My Goal
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">{progress}% completed</span>
            <span className="text-sm text-muted-foreground">
              {currency}{currentAmount} of {currency}{targetAmount}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm mt-3">
          <div className="flex items-center">
            <Icon name="Users" className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{backers} backers</span>
          </div>
          {daysRemaining !== null && (
            <div className="flex items-center">
              <Icon name="Calendar" className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{daysRemaining} days left</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-muted/20 pt-3 flex justify-end">
        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
          <Icon name="Share2" className="mr-1 h-4 w-4" />
          Share Goal
        </Button>
      </CardFooter>
    </Card>
  );
}

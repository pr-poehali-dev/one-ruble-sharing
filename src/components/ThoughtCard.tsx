import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ThoughtCardProps {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  date: string;
  donationsCount: number;
  donationCurrency?: string;
}

const ThoughtCard = ({
  author,
  authorAvatar,
  content,
  date,
  donationsCount,
  donationCurrency = "$",
}: ThoughtCardProps) => {
  const [donations, setDonations] = useState(donationsCount);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleDonate = () => {
    setDonations(donations + 1);
    setIsAnimating(true);
    toast({
      title: "Donation sent!",
      description: `You've boosted this idea with ${donationCurrency}1`,
      duration: 3000,
    });
    setTimeout(() => setIsAnimating(false), 700);
  };

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Card className="mb-4 border border-[#eaeaea] bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <CardContent className="pt-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 border border-[#eaeaea]">
              <AvatarImage src={authorAvatar} />
              <AvatarFallback className="bg-[#F5F8FF] text-[#3562FF]">
                {getInitials(author)}
              </AvatarFallback>
            </Avatar>
            <div className="font-medium text-[#212121]">{author}</div>
          </div>
          <div className="text-sm text-muted-foreground">{formattedDate}</div>
        </div>
        <p className="text-[#333333] text-base leading-relaxed">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#eaeaea] py-3 px-6 bg-[#fafafa]">
        <span className="text-sm text-muted-foreground flex items-center">
          <Icon name="Coins" className="mr-1 text-[#3562FF]" size={16} />
          {donations} {donationCurrency}
        </span>
        <Button
          onClick={handleDonate}
          variant="ghost"
          className={`text-[#3562FF] hover:text-[#1E40AF] hover:bg-[#F5F8FF] rounded-full px-4 ${isAnimating ? "animate-boost" : ""}`}
        >
          <Icon name="ArrowUpCircle" className="h-4 w-4 mr-1" />
          Boost {donationCurrency}1
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThoughtCard;

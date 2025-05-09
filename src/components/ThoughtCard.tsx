
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
  donationCurrency = "₽",
}: ThoughtCardProps) => {
  const [donations, setDonations] = useState(donationsCount);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleDonate = () => {
    setDonations(donations + 1);
    setIsAnimating(true);
    toast({
      title: "Рубль отправлен!",
      description: `Вы поддержали эту идею на ${donationCurrency}1`,
      duration: 3000,
    });
    setTimeout(() => setIsAnimating(false), 700);
  };

  const formattedDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
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
    <Card className="mb-4 border border-[#dddfe2] bg-white hover:shadow-sm transition-shadow duration-200">
      <CardContent className="pt-4">
        <div className="mb-2 flex items-center">
          <Avatar className="h-9 w-9 mr-2 border border-[#dddfe2]">
            <AvatarImage src={authorAvatar} alt={author} />
            <AvatarFallback className="bg-[#E4E6EB] text-[#65676B]">
              {getInitials(author)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-[#050505]">{author}</div>
            <div className="text-xs text-[#65676B]">{formattedDate}</div>
          </div>
        </div>
        <p className="text-[#050505] text-base leading-relaxed my-3">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#dddfe2] py-2 px-4">
        <span className="text-sm text-[#65676B] flex items-center">
          <Icon name="Users" className="mr-1" size={16} />
          {donations} поддержали
        </span>
        <Button
          onClick={handleDonate}
          variant="ghost"
          className={`text-[#1877F2] hover:bg-[#F0F2F5] rounded-md ${isAnimating ? "animate-boost" : ""}`}
        >
          <Icon name="Send" className="h-4 w-4 mr-1" />
          Отправить {donationCurrency}1
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThoughtCard;

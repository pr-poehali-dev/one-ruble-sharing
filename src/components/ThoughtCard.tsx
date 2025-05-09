
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ThoughtCardProps {
  id: string;
  author: string;
  content: string;
  date: string;
  donationsCount: number;
}

const ThoughtCard = ({ author, content, date, donationsCount }: ThoughtCardProps) => {
  const [donations, setDonations] = useState(donationsCount);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDonate = () => {
    setDonations(donations + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });

  return (
    <Card className="mb-4 border border-[#E5DEFF] bg-white hover:shadow-md transition-shadow duration-200">
      <CardContent className="pt-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="font-medium text-[#1A1F2C]">{author}</div>
          <div className="text-sm text-muted-foreground">{formattedDate}</div>
        </div>
        <p className="text-[#333333] text-base">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-[#F3F3F3] py-3 px-6">
        <span className="text-sm text-muted-foreground flex items-center">
          <Icon name="HeartHandshake" className="mr-1 text-[#9b87f5]" size={16} />
          {donations} {donations === 1 ? 'рубль' : donations >= 2 && donations <= 4 ? 'рубля' : 'рублей'}
        </span>
        <Button 
          onClick={handleDonate}
          variant="ghost" 
          className={`text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#F2FCE2] ${isAnimating ? 'animate-pulse' : ''}`}
        >
          Отправить 1₽
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThoughtCard;

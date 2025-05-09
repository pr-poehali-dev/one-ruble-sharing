
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ThoughtInputProps {
  onAddThought: (content: string) => void;
}

const ThoughtInput = ({ onAddThought }: ThoughtInputProps) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!content.trim()) {
      toast({
        title: "Пустая мысль?",
        description: "Напишите что-нибудь, прежде чем делиться с миром!",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация отправки на сервер
    setTimeout(() => {
      onAddThought(content);
      setContent('');
      setIsSubmitting(false);
      toast({
        title: "Опубликовано!",
        description: "Ваша мысль добавлена в ленту",
      });
    }, 500);
  };

  return (
    <Card className="mb-6 border border-[#E5DEFF] bg-white">
      <CardContent className="pt-6">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="А что если все скинутся вам по 1 рублю?"
          className="min-h-[100px] resize-none border-[#E5DEFF] focus:border-[#9b87f5] transition-colors"
        />
      </CardContent>
      <CardFooter className="justify-end border-t border-[#F3F3F3] py-3 px-6">
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
        >
          {isSubmitting ? 'Публикация...' : 'Поделиться мыслью'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThoughtInput;

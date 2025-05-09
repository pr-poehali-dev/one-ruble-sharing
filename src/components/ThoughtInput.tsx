
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

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
        description: "Ваша идея добавлена в ленту",
      });
    }, 500);
  };

  return (
    <Card className="mb-6 border border-[#dddfe2] bg-white shadow-sm">
      <CardContent className="pt-4">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="А что если бы каждый отправил мне всего 1 рубль?"
          className="min-h-[100px] resize-none border-[#dddfe2] focus:border-[#1877F2] transition-colors p-3"
        />
      </CardContent>
      <CardFooter className="justify-end border-t border-[#dddfe2] py-2 px-4 bg-[#F0F2F5]">
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-md"
        >
          <Icon name="Send" className="h-4 w-4 mr-2" />
          {isSubmitting ? 'Публикуем...' : 'Опубликовать'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThoughtInput;

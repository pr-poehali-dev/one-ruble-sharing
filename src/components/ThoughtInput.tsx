
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
        title: "Empty thought?",
        description: "Write something before sharing with the world!",
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
        title: "Published!",
        description: "Your idea has been added to the feed",
      });
    }, 500);
  };

  return (
    <Card className="mb-6 border border-[#eaeaea] bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="pt-6">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What if everyone boosted your idea with just $1?"
          className="min-h-[120px] resize-none border-[#eaeaea] focus:border-[#3562FF] transition-colors"
        />
      </CardContent>
      <CardFooter className="justify-end border-t border-[#eaeaea] py-3 px-6 bg-[#fafafa]">
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="bg-[#3562FF] hover:bg-[#1E40AF] text-white rounded-full px-5"
        >
          <Icon name="SendHorizonal" className="h-4 w-4 mr-2" />
          {isSubmitting ? 'Publishing...' : 'Share Idea'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThoughtInput;

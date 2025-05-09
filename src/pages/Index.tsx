
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ThoughtCard from '@/components/ThoughtCard';
import ThoughtInput from '@/components/ThoughtInput';
import { BrandLogo } from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Начальные данные для демонстрации
const initialThoughts = [
  {
    id: '1',
    author: 'Anna Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'What if everyone who reads this post sends me just $1? I wonder how much would be collected in a month for my small business idea...',
    date: '2025-05-08T15:34:00',
    donationsCount: 247
  },
  {
    id: '2',
    author: 'Carlos Rodriguez',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Today I came up with a startup, but I need support. If you like the idea of an educational platform for children from low-income families, send a symbolic dollar as a sign of support!',
    date: '2025-05-09T09:21:00',
    donationsCount: 89
  },
  {
    id: '3',
    author: 'Sarah Kim',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'One dollar is nothing for everyone, but together we can do a lot. Starting a fundraiser to buy food for a homeless animal shelter in our area. Every $1 helps!',
    date: '2025-05-09T12:45:00',
    donationsCount: 324
  }
];

const Index = () => {
  const [thoughts, setThoughts] = useState(initialThoughts);
  const [isLoading, setIsLoading] = useState(true);
  
  // Имитация загрузки данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAddThought = (content: string) => {
    const newThought = {
      id: `${Date.now()}`,
      author: 'You',
      content,
      date: new Date().toISOString(),
      donationsCount: 0
    };
    
    setThoughts([newThought, ...thoughts]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-16">
      <Header />
      
      <main className="pt-24 px-4 max-w-2xl mx-auto">
        <section className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <BrandLogo className="h-20 w-20 text-[#3562FF]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#212121] mb-4">
            What if everyone boosted you with <span className="text-[#3562FF]">$1</span>?
          </h1>
          <p className="text-center text-[#555555] mb-8 max-w-lg mx-auto">
            Share your ideas, dreams, and projects. 
            Let people support you with micro-boosts of just $1.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button variant="outline" className="rounded-full border-[#eaeaea] bg-white shadow-sm">
              <Icon name="TrendingUp" className="h-4 w-4 mr-1 text-[#3562FF]" />
              Trending
            </Button>
            <Button variant="outline" className="rounded-full border-[#eaeaea] bg-white shadow-sm">
              <Icon name="Star" className="h-4 w-4 mr-1 text-[#3562FF]" />
              Featured
            </Button>
            <Button variant="outline" className="rounded-full border-[#eaeaea] bg-white shadow-sm">
              <Icon name="Sparkles" className="h-4 w-4 mr-1 text-[#3562FF]" />
              New
            </Button>
          </div>
          
          <ThoughtInput onAddThought={handleAddThought} />
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-[#212121]">Global Feed</h2>
            <Button variant="ghost" size="sm" className="text-[#3562FF]">
              <Icon name="RefreshCw" className="h-4 w-4 mr-1" />
              Refresh
            </Button>
          </div>
          
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="mb-4 animate-pulse">
                <div className="h-40 bg-gray-200 rounded-lg"></div>
              </div>
            ))
          ) : (
            thoughts.map(thought => (
              <ThoughtCard
                key={thought.id}
                id={thought.id}
                author={thought.author}
                authorAvatar={thought.authorAvatar}
                content={thought.content}
                date={thought.date}
                donationsCount={thought.donationsCount}
                donationCurrency="$"
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;

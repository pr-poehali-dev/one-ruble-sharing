
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ThoughtCard from '@/components/ThoughtCard';
import ThoughtInput from '@/components/ThoughtInput';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingTopics from '@/components/TrendingTopics';
import GoalProgress from '@/components/GoalProgress';
import BoostLeaderboard from '@/components/BoostLeaderboard';
import ChallengeCard from '@/components/ChallengeCard';

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

const featuredChallenge = {
  title: "Start a Micro-Business",
  description: "Launch a small business with a minimal budget. Document your journey and get boosted!",
  reward: "$500 Prize Pool",
  daysLeft: 12,
  participants: 342,
  category: "Business",
  difficulty: "medium" as const
};

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
    <div className="min-h-screen bg-[#F9FAFC]">
      <Header />
      <Sidebar />
      
      <main className="flex min-h-screen flex-col md:pl-64 pt-16">
        <div className="container px-4 py-6 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="feed" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="feed" className="flex items-center">
                    <Icon name="Layers" className="mr-1 h-4 w-4" />
                    Feed
                  </TabsTrigger>
                  <TabsTrigger value="trending" className="flex items-center">
                    <Icon name="TrendingUp" className="mr-1 h-4 w-4" />
                    Trending
                  </TabsTrigger>
                  <TabsTrigger value="following" className="flex items-center">
                    <Icon name="Users" className="mr-1 h-4 w-4" />
                    Following
                  </TabsTrigger>
                </TabsList>
                
                <Button variant="ghost" size="sm" className="text-primary">
                  <Icon name="RefreshCw" className="h-4 w-4 mr-1" />
                  Refresh
                </Button>
              </div>
              
              <TabsContent value="feed" className="mt-0">
                <ThoughtInput onAddThought={handleAddThought} />
                <TrendingTopics />
                
                <div className="mt-4">
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
                </div>
              </TabsContent>
              
              <TabsContent value="trending">
                <div className="flex items-center justify-center h-40 bg-muted/30 rounded-lg border border-dashed">
                  <div className="text-center">
                    <Icon name="TrendingUp" className="mx-auto h-8 w-8 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">Trending Content</h3>
                    <p className="text-sm text-muted-foreground">Discover what's popular right now</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="following">
                <div className="flex items-center justify-center h-40 bg-muted/30 rounded-lg border border-dashed">
                  <div className="text-center">
                    <Icon name="Users" className="mx-auto h-8 w-8 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">Following Feed</h3>
                    <p className="text-sm text-muted-foreground">Content from creators you follow</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            <GoalProgress 
              title="Launch My Photo Exhibition"
              currentAmount={620}
              targetAmount={1000}
              backers={58}
              deadline="2025-06-15"
            />
            
            <BoostLeaderboard />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <Icon name="Zap" className="mr-2 h-5 w-5 text-amber-500" />
                Featured Challenge
              </h3>
              <ChallengeCard {...featuredChallenge} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

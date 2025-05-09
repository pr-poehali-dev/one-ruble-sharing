
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ThoughtCard from '@/components/ThoughtCard';
import ThoughtInput from '@/components/ThoughtInput';

// Начальные данные для демонстрации
const initialThoughts = [
  {
    id: '1',
    author: 'Анна Иванова',
    content: 'А что если каждый, кто прочитает этот пост, отправит мне всего 1 рубль? Интересно, сколько соберётся за месяц...',
    date: '2025-05-08T15:34:00',
    donationsCount: 247
  },
  {
    id: '2',
    author: 'Павел Сергеев',
    content: 'Сегодня придумал стартап, но нужна поддержка. Если вам нравится идея образовательной платформы для детей из малообеспеченных семей, отправьте символический рубль в знак поддержки!',
    date: '2025-05-09T09:21:00',
    donationsCount: 89
  },
  {
    id: '3',
    author: 'Мария Петрова',
    content: 'Один рубль — ничто для каждого, но вместе мы можем многое. Начинаю сбор на покупку корма для приюта бездомных животных в нашем районе.',
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
      author: 'Вы',
      content,
      date: new Date().toISOString(),
      donationsCount: 0
    };
    
    setThoughts([newThought, ...thoughts]);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7] pb-16">
      <Header />
      
      <main className="pt-24 px-4 max-w-2xl mx-auto">
        <section className="mb-10">
          <h1 className="text-3xl font-bold text-center text-[#1A1F2C] mb-6">
            А что если все скинутся по <span className="text-[#9b87f5]">1 рублю</span>?
          </h1>
          <p className="text-center text-[#555555] mb-8 max-w-lg mx-auto">
            Делитесь своими мыслями, идеями и проектами. 
            Посетители могут поддержать вас символическим рублём.
          </p>
          
          <ThoughtInput onAddThought={handleAddThought} />
        </section>
        
        <section>
          <h2 className="text-xl font-medium text-[#1A1F2C] mb-4">Лента мыслей</h2>
          
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
                content={thought.content}
                date={thought.date}
                donationsCount={thought.donationsCount}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;

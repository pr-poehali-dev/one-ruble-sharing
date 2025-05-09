
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ThoughtCard from "@/components/ThoughtCard";
import ThoughtInput from "@/components/ThoughtInput";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Начальные данные для демонстрации
const initialThoughts = [
  {
    id: "1",
    author: "Анна Иванова",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content:
      "А что если каждый, кто прочитает этот пост, отправит мне всего 1 рубль? Интересно, сколько бы собралось за месяц для идеи моего маленького бизнеса...",
    date: "2025-05-08T15:34:00",
    donationsCount: 247,
  },
  {
    id: "2",
    author: "Сергей Петров",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content:
      "Сегодня придумал стартап, но нужна поддержка. Если нравится идея образовательной платформы для детей из малоимущих семей, отправьте символический рубль в знак поддержки!",
    date: "2025-05-09T09:21:00",
    donationsCount: 89,
  },
  {
    id: "3",
    author: "Елена Смирнова",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content:
      "Для всех нас рубль — ничего, а вместе мы можем многое. Начинаю сбор на покупку корма для приюта бездомных животных в нашем районе. Каждый рубль помогает!",
    date: "2025-05-09T12:45:00",
    donationsCount: 324,
  },
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
      author: "Вы",
      content,
      date: new Date().toISOString(),
      donationsCount: 0,
    };

    setThoughts([newThought, ...thoughts]);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <Header />
      <Sidebar />

      <main className="flex min-h-screen flex-col md:pl-[280px] pt-14">
        <div className="container max-w-2xl px-4 py-6">
          <ThoughtInput onAddThought={handleAddThought} />

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-[#050505]">Лента идей</h2>
            <Button variant="ghost" size="sm" className="text-[#65676B]">
              <Icon name="RefreshCw" className="h-4 w-4 mr-1" />
              Обновить
            </Button>
          </div>

          {isLoading ? (
            // Скелетон загрузки
            Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="mb-4 animate-pulse">
                  <div className="h-40 bg-gray-200 rounded-lg"></div>
                </div>
              ))
          ) : (
            // Список мыслей
            thoughts.map((thought) => (
              <ThoughtCard
                key={thought.id}
                id={thought.id}
                author={thought.author}
                authorAvatar={thought.authorAvatar}
                content={thought.content}
                date={thought.date}
                donationsCount={thought.donationsCount}
                donationCurrency="₽"
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;

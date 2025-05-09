
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Создаем заглушки для страниц, которые будут добавлены позже
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex min-h-screen flex-col md:pl-64 pt-16">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground">
        Эта страница находится в разработке. Скоро здесь появится больше контента!
      </p>
    </div>
  </div>
);

// Создаем клиент для React Query
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Временные страницы, которые будут заменены на настоящие компоненты в будущем */}
            <Route path="/explore" element={<PlaceholderPage title="Explore - Исследуйте интересные идеи" />} />
            <Route path="/my-boosts" element={<PlaceholderPage title="My Boosts - Ваши поддержанные идеи" />} />
            <Route path="/notifications" element={<PlaceholderPage title="Уведомления" />} />
            <Route path="/saved" element={<PlaceholderPage title="Сохраненные идеи" />} />
            <Route path="/challenges" element={<PlaceholderPage title="Challenges - Участвуйте в челленджах" />} />
            <Route path="/analytics" element={<PlaceholderPage title="Analytics - Статистика и аналитика" />} />
            <Route path="/communities" element={<PlaceholderPage title="Communities - Сообщества по интересам" />} />
            <Route path="/profile" element={<PlaceholderPage title="Ваш профиль" />} />
            
            {/* Редирект со всех остальных путей на страницу 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

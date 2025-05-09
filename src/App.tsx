
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Создаем простую страницу-заглушку для переходов по ссылкам
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex min-h-screen flex-col md:pl-[280px] pt-14 bg-[#F0F2F5]">
    <div className="container max-w-2xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-[#050505]">{title}</h1>
      <p className="text-[#65676B] bg-white p-4 rounded-lg border border-[#dddfe2]">
        Эта страница находится в разработке. Основная идея нашего сервиса - собирать по рублю с каждого пользователя для поддержки интересных идей.
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
            {/* Временные страницы для навигации */}
            <Route path="/trending" element={<PlaceholderPage title="Популярные идеи" />} />
            <Route path="/recent" element={<PlaceholderPage title="Недавние идеи" />} />
            <Route path="/saved" element={<PlaceholderPage title="Сохраненные идеи" />} />
            <Route path="/wallet" element={<PlaceholderPage title="Мой кошелёк" />} />
            <Route path="/about" element={<PlaceholderPage title="О сервисе РубльОтКаждого" />} />
            <Route path="/profile" element={<PlaceholderPage title="Ваш профиль" />} />
            <Route path="/settings" element={<PlaceholderPage title="Настройки" />} />
            
            {/* Редирект со всех остальных путей на страницу 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

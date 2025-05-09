import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { BrandLogo } from "@/components/BrandLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F2F5]">
      <div className="text-center bg-white p-8 rounded-lg shadow-sm max-w-md border border-[#dddfe2]">
        <div className="flex justify-center mb-4">
          <BrandLogo className="h-16 w-16 text-[#1877F2]" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-[#1877F2]">404</h1>
        <p className="text-xl text-[#050505] mb-4">Упс! Страница не найдена</p>
        <p className="text-[#65676B] mb-6">
          Страница, которую вы ищете, была перемещена, удалена или никогда не
          существовала.
        </p>
        <Button asChild className="gap-2 bg-[#1877F2] hover:bg-[#166FE5]">
          <Link to="/">
            <Icon name="Home" className="h-4 w-4" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

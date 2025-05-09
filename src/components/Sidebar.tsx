
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: "Home", label: "Главная", path: "/" },
    { icon: "TrendingUp", label: "Популярное", path: "/trending" },
    { icon: "Clock", label: "Недавние", path: "/recent" },
    { icon: "Bookmark", label: "Сохранённые", path: "/saved" },
    { icon: "Wallet", label: "Мой кошелёк", path: "/wallet" },
  ];

  return (
    <div className="hidden md:flex md:w-[280px] md:flex-col md:fixed md:inset-y-0 z-10 pt-14">
      <div className="flex flex-col flex-grow bg-[#F0F2F5] pt-5 overflow-y-auto">
        <nav className="flex-1 px-4 space-y-1.5">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className="w-full justify-start text-[#050505] hover:bg-[#E4E6EB] h-10"
              onClick={() => navigate(item.path)}
            >
              <Icon 
                name={item.icon} 
                className="mr-3 h-5 w-5 text-[#1877F2]" 
              />
              <span className="font-medium">{item.label}</span>
            </Button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="p-3 bg-white rounded-lg border border-[#dddfe2]">
            <h3 className="font-medium text-sm mb-2">Как это работает?</h3>
            <p className="text-xs text-[#65676B] mb-2">
              Делитесь своими мыслями, и пусть другие поддержат вас рублём.
              Каждый маленький вклад имеет значение!
            </p>
            <Button 
              variant="link" 
              className="text-[#1877F2] p-0 h-auto text-xs"
              onClick={() => navigate("/about")}
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="text-xs text-[#65676B] mt-4 px-2">
            <div className="flex flex-wrap gap-2">
              <Button variant="link" className="text-xs h-auto p-0 text-[#65676B]">О нас</Button>
              <Button variant="link" className="text-xs h-auto p-0 text-[#65676B]">Конфиденциальность</Button>
              <Button variant="link" className="text-xs h-auto p-0 text-[#65676B]">Условия</Button>
              <Button variant="link" className="text-xs h-auto p-0 text-[#65676B]">Помощь</Button>
            </div>
            <p className="mt-2">© 2025 РубльОтКаждого</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

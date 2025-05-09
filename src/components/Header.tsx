
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { BrandLogo } from "./BrandLogo";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-14 bg-white border-b border-[#dddfe2] flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="flex items-center" onClick={() => navigate("/")} style={{cursor: "pointer"}}>
            <BrandLogo className="h-8 w-8 mr-2" />
            <div className="font-bold text-xl text-[#050505]">
              Рубль<span className="text-[#1877F2]">ОтКаждого</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 mx-4 max-w-md">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Поиск идей и людей..."
              className="w-full bg-[#F0F2F5] border-[#dddfe2] pl-10"
            />
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#1877F2]">
              3
            </Badge>
            <span className="sr-only">Уведомления</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 p-0"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>МЕ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex items-center"
                onClick={() => navigate("/profile")}
              >
                <Icon name="User" className="mr-2 h-4 w-4" />
                <span>Профиль</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center"
                onClick={() => navigate("/wallet")}
              >
                <Icon name="Wallet" className="mr-2 h-4 w-4" />
                <span>Мой кошелёк</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center"
                onClick={() => navigate("/settings")}
              >
                <Icon name="Settings" className="mr-2 h-4 w-4" />
                <span>Настройки</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center">
                <Icon name="LogOut" className="mr-2 h-4 w-4" />
                <span>Выйти</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;


import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { BrandLogo } from './BrandLogo';
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

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-16 bg-white border-b border-[#eaeaea] flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center md:w-64 lg:w-64">
          <div className="flex items-center md:justify-center">
            <BrandLogo className="h-8 w-8 mr-2" />
            <div className="font-bold text-xl text-[#212121]">Coin<span className="text-[#3562FF]">Boost</span></div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 mx-4 max-w-md">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search ideas, challenges, users..."
              className="w-full bg-[#F5F8FF] border-[#eaeaea] pl-10 focus-visible:ring-[#3562FF]"
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
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#3562FF]">
              3
            </Badge>
            <span className="sr-only">Notifications</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex gap-2 border-[#eaeaea] text-[#3562FF] hover:bg-[#F5F8FF] hover:text-[#1E40AF]"
          >
            <Icon name="Plus" className="h-4 w-4" />
            <span>Create Goal</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 p-0">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center">
                <Icon name="User" className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                <Icon name="Settings" className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center">
                <Icon name="LogOut" className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

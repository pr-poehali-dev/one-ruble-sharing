
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { BrandLogo } from "@/components/BrandLogo";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Feed",
    href: "/",
    icon: "HomeIcon",
  },
  {
    title: "Explore",
    href: "/explore",
    icon: "Compass",
    badge: "New",
  },
  {
    title: "My Boosts",
    href: "/my-boosts",
    icon: "TrendingUp",
    color: "green-500",
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: "Bell",
    badge: 3,
  },
  {
    title: "Saved Ideas",
    href: "/saved",
    icon: "Bookmark",
  },
  {
    title: "Challenges",
    href: "/challenges",
    icon: "Trophy",
    color: "amber-500",
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: "BarChart",
    color: "blue-500",
  },
  {
    title: "Communities",
    href: "/communities",
    icon: "Users",
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <div className="flex h-full flex-col">
            <div className="flex items-center px-2 py-4">
              <BrandLogo className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Coin<span className="text-primary">Boost</span></span>
            </div>
            <div className="space-y-4 py-4 flex-1">
              <SidebarNav items={sidebarNavItems} />
            </div>
            <div className="mt-auto border-t px-4 py-4">
              <div 
                className="flex items-center gap-2 cursor-pointer hover:bg-accent rounded-lg p-2"
                onClick={() => navigate("/profile")}
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Your Profile</p>
                  <p className="text-xs text-muted-foreground">Settings & More</p>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className={cn("hidden h-screen md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-30", className)}>
        <div className="flex flex-col flex-grow bg-card border-r overflow-y-auto">
          <div className="flex items-center gap-2 h-16 px-6 border-b">
            <BrandLogo className="h-8 w-8" />
            <span className="font-bold text-xl">Coin<span className="text-primary">Boost</span></span>
          </div>
          <div className="flex flex-col flex-1 p-4 space-y-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Main Menu</h2>
              <SidebarNav items={sidebarNavItems.slice(0, 5)} />
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Discover</h2>
              <SidebarNav items={sidebarNavItems.slice(5)} />
            </div>
            
            <div className="p-3 mt-4">
              <div className="rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 p-4 text-white">
                <h3 className="font-bold">Premium Plan</h3>
                <p className="text-sm opacity-90 mb-2">Unlock more features and boost exposure</p>
                <Button size="sm" variant="secondary" className="mt-2 bg-white/20 hover:bg-white/30 text-white">
                  <Icon name="Zap" className="mr-2 h-4 w-4" />
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-auto border-t p-4">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-accent rounded-lg p-2"
              onClick={() => navigate("/profile")}
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Your Profile</p>
                <p className="text-xs text-muted-foreground">Settings & More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

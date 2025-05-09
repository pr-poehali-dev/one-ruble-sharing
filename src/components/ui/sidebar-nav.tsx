import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { IconProps } from "lucide-react";
import Icon from "@/components/ui/icon";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: string;
    color?: string;
    badge?: number | string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className={cn("flex space-y-1 lg:space-y-2 flex-col", className)}
      {...props}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.href;

        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              isActive
                ? "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                : "hover:bg-muted hover:text-accent-foreground",
              "justify-start gap-2 px-3",
              className,
            )}
          >
            <Icon
              name={item.icon}
              className={cn(
                "h-5 w-5 shrink-0",
                item.color
                  ? `text-${item.color}`
                  : isActive
                    ? "text-accent-foreground"
                    : "text-muted-foreground",
              )}
            />
            <span>{item.title}</span>
            {item.badge && (
              <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}


import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-16 bg-white border-b border-[#F3F3F3] flex items-center px-4 md:px-8">
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
        <div className="flex items-center">
          <div className="font-bold text-xl text-[#1A1F2C] mr-1">Рубль<span className="text-[#9b87f5]">от</span>Каждого</div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-[#1A1F2C] hidden md:flex"
          >
            <Icon name="HelpCircle" className="h-4 w-4 mr-1 text-[#9b87f5]" />
            Как это работает
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-[#E5DEFF] text-[#9b87f5] hover:bg-[#F2FCE2] hover:text-[#7E69AB]"
          >
            <Icon name="LogIn" className="h-4 w-4 mr-1" />
            <span className="hidden md:inline">Войти</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

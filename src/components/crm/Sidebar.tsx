import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="w-64 min-h-screen bg-[#34495E] text-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">AmoCRM</h1>
        <p className="text-sm text-gray-300 mt-1">Панель управления</p>
      </div>

      <nav className="space-y-2">
        <Button
          variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
          className="w-full justify-start text-white hover:bg-[#4AA0E2]"
          onClick={() => setActiveTab('dashboard')}
        >
          <Icon name="LayoutDashboard" size={20} className="mr-3" />
          Главная
        </Button>
        <Button
          variant={activeTab === 'deals' ? 'default' : 'ghost'}
          className="w-full justify-start text-white hover:bg-[#4AA0E2]"
          onClick={() => setActiveTab('deals')}
        >
          <Icon name="TrendingUp" size={20} className="mr-3" />
          Сделки
        </Button>
        <Button
          variant={activeTab === 'clients' ? 'default' : 'ghost'}
          className="w-full justify-start text-white hover:bg-[#4AA0E2]"
          onClick={() => setActiveTab('clients')}
        >
          <Icon name="Users" size={20} className="mr-3" />
          Клиенты
        </Button>
        <Button
          variant={activeTab === 'analytics' ? 'default' : 'ghost'}
          className="w-full justify-start text-white hover:bg-[#4AA0E2]"
          onClick={() => setActiveTab('analytics')}
        >
          <Icon name="BarChart3" size={20} className="mr-3" />
          Аналитика
        </Button>
        <Button
          variant={activeTab === 'tasks' ? 'default' : 'ghost'}
          className="w-full justify-start text-white hover:bg-[#4AA0E2]"
          onClick={() => setActiveTab('tasks')}
        >
          <Icon name="CheckSquare" size={20} className="mr-3" />
          Задачи
        </Button>
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          className="w-full justify-start text-white hover:bg-[#4AA0E2]"
          onClick={() => setActiveTab('settings')}
        >
          <Icon name="Settings" size={20} className="mr-3" />
          Настройки
        </Button>
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3 p-3 bg-[#2C3E50] rounded-lg">
          <Avatar>
            <AvatarFallback className="bg-[#4AA0E2]">МС</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Менеджер</p>
            <p className="text-xs text-gray-400">manager@amocrm.ru</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

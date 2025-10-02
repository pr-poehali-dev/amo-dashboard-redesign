import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const salesData = [
  { month: 'Янв', value: 4500 },
  { month: 'Фев', value: 5200 },
  { month: 'Мар', value: 4800 },
  { month: 'Апр', value: 6100 },
  { month: 'Май', value: 7300 },
  { month: 'Июн', value: 6800 },
];

const funnelData = [
  { name: 'Новые', value: 45, color: '#4AA0E2' },
  { name: 'В работе', value: 32, color: '#2ECC71' },
  { name: 'Переговоры', value: 18, color: '#F39C12' },
  { name: 'Закрыто', value: 12, color: '#9B59B6' },
];

const deals = [
  { id: 1, title: 'Разработка сайта', client: 'ООО "Ромашка"', amount: 250000, stage: 'Переговоры', progress: 65 },
  { id: 2, title: 'CRM внедрение', client: 'ИП Иванов', amount: 180000, stage: 'В работе', progress: 40 },
  { id: 3, title: 'SEO продвижение', client: 'ООО "Цветок"', amount: 95000, stage: 'Новые', progress: 15 },
];

const tasks = [
  { id: 1, title: 'Позвонить клиенту по проекту', client: 'ООО "Ромашка"', time: '14:00', priority: 'high' },
  { id: 2, title: 'Отправить коммерческое предложение', client: 'ИП Иванов', time: '16:30', priority: 'medium' },
  { id: 3, title: 'Встреча с заказчиком', client: 'ООО "Техно"', time: 'Завтра 10:00', priority: 'high' },
  { id: 4, title: 'Подготовить отчет', client: 'ООО "Цветок"', time: 'Завтра', priority: 'low' },
];

const DashboardTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Панель управления</h2>
        <p className="text-gray-600 mt-1">Общая статистика и метрики продаж</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего сделок</CardTitle>
            <Icon name="TrendingUp" size={20} className="text-[#4AA0E2]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">107</div>
            <p className="text-xs text-[#2ECC71] mt-2 flex items-center">
              <Icon name="ArrowUp" size={14} className="mr-1" />
              +15% к прошлому месяцу
            </p>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Выручка</CardTitle>
            <Icon name="DollarSign" size={20} className="text-[#2ECC71]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">2.4M ₽</div>
            <p className="text-xs text-[#2ECC71] mt-2 flex items-center">
              <Icon name="ArrowUp" size={14} className="mr-1" />
              +23% к прошлому месяцу
            </p>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Новые клиенты</CardTitle>
            <Icon name="Users" size={20} className="text-[#F39C12]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">34</div>
            <p className="text-xs text-[#2ECC71] mt-2 flex items-center">
              <Icon name="ArrowUp" size={14} className="mr-1" />
              +8% к прошлому месяцу
            </p>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Конверсия</CardTitle>
            <Icon name="Target" size={20} className="text-[#9B59B6]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">26.7%</div>
            <p className="text-xs text-[#E74C3C] mt-2 flex items-center">
              <Icon name="ArrowDown" size={14} className="mr-1" />
              -2% к прошлому месяцу
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={20} />
              Динамика продаж
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4AA0E2" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Filter" size={20} />
              Воронка продаж
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={funnelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {funnelData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Briefcase" size={20} />
              Активные сделки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deals.slice(0, 3).map((deal) => (
                <div key={deal.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{deal.title}</h4>
                      <p className="text-sm text-gray-600">{deal.client}</p>
                    </div>
                    <Badge variant="outline">{deal.stage}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Прогресс</span>
                      <span className="font-semibold">{deal.progress}%</span>
                    </div>
                    <Progress value={deal.progress} className="h-2" />
                    <p className="text-lg font-bold text-[#4AA0E2]">{deal.amount.toLocaleString()} ₽</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Bell" size={20} />
              Задачи на сегодня
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tasks.slice(0, 4).map((task) => (
                <div key={task.id} className="p-3 border rounded-lg hover:border-[#4AA0E2] transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-4 h-4 rounded border-2 border-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-gray-800">{task.title}</p>
                        {task.priority === 'high' && (
                          <Badge variant="destructive" className="text-xs">Срочно</Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{task.client}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                        <Icon name="Clock" size={12} />
                        {task.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardTab;

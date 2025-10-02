import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import {
  BarChart,
  Bar,
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
  { id: 4, title: 'Мобильное приложение', client: 'ООО "Техно"', amount: 450000, stage: 'Переговоры', progress: 80 },
];

const clients = [
  { id: 1, name: 'Анна Петрова', company: 'ООО "Ромашка"', deals: 3, revenue: 750000, status: 'active' },
  { id: 2, name: 'Иван Иванов', company: 'ИП Иванов', deals: 2, revenue: 320000, status: 'active' },
  { id: 3, name: 'Мария Сидорова', company: 'ООО "Цветок"', deals: 1, revenue: 95000, status: 'new' },
  { id: 4, name: 'Петр Васильев', company: 'ООО "Техно"', deals: 4, revenue: 1200000, status: 'vip' },
];

const tasks = [
  { id: 1, title: 'Позвонить клиенту по проекту', client: 'ООО "Ромашка"', time: '14:00', priority: 'high' },
  { id: 2, title: 'Отправить коммерческое предложение', client: 'ИП Иванов', time: '16:30', priority: 'medium' },
  { id: 3, title: 'Встреча с заказчиком', client: 'ООО "Техно"', time: 'Завтра 10:00', priority: 'high' },
  { id: 4, title: 'Подготовить отчет', client: 'ООО "Цветок"', time: 'Завтра', priority: 'low' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
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

        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
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
          )}

          {activeTab === 'deals' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Сделки</h2>
                  <p className="text-gray-600 mt-1">Управление воронкой продаж</p>
                </div>
                <Button className="bg-[#4AA0E2] hover:bg-[#3A90D2]">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать сделку
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {deals.map((deal) => (
                  <Card key={deal.id} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{deal.title}</h3>
                          <p className="text-gray-600 mb-4">{deal.client}</p>
                          <div className="flex items-center gap-6">
                            <Badge variant="outline" className="text-sm">{deal.stage}</Badge>
                            <div className="flex items-center gap-4">
                              <div>
                                <p className="text-xs text-gray-500">Прогресс</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Progress value={deal.progress} className="w-24 h-2" />
                                  <span className="text-sm font-medium">{deal.progress}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#4AA0E2]">{deal.amount.toLocaleString()} ₽</p>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" size={16} />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Клиенты</h2>
                  <p className="text-gray-600 mt-1">База контактов и компаний</p>
                </div>
                <Button className="bg-[#4AA0E2] hover:bg-[#3A90D2]">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить клиента
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clients.map((client) => (
                  <Card key={client.id} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-[#4AA0E2] text-white">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-800">{client.name}</h3>
                              <p className="text-sm text-gray-600">{client.company}</p>
                            </div>
                            {client.status === 'vip' && (
                              <Badge className="bg-[#F39C12]">VIP</Badge>
                            )}
                            {client.status === 'new' && (
                              <Badge className="bg-[#2ECC71]">Новый</Badge>
                            )}
                          </div>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Сделок:</span>
                              <span className="font-semibold">{client.deals}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Выручка:</span>
                              <span className="font-semibold text-[#2ECC71]">
                                {client.revenue.toLocaleString()} ₽
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Аналитика и отчеты</h2>
                <p className="text-gray-600 mt-1">Визуализация бизнес-метрик</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Продажи по месяцам</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#4AA0E2" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Средний чек</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-[#4AA0E2]">22,430 ₽</p>
                    <p className="text-sm text-gray-600 mt-2">+12% к прошлому периоду</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Время закрытия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-[#2ECC71]">14 дней</p>
                    <p className="text-sm text-gray-600 mt-2">-3 дня к прошлому периоду</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Повторные продажи</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-[#9B59B6]">38%</p>
                    <p className="text-sm text-gray-600 mt-2">+5% к прошлому периоду</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Задачи и напоминания</h2>
                  <p className="text-gray-600 mt-1">Планирование и контроль работы</p>
                </div>
                <Button className="bg-[#4AA0E2] hover:bg-[#3A90D2]">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать задачу
                </Button>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <Card key={task.id} className="hover-scale">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <div className="w-5 h-5 rounded border-2 border-gray-400 hover:border-[#4AA0E2] cursor-pointer transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-1">{task.title}</h3>
                              <p className="text-sm text-gray-600">{task.client}</p>
                            </div>
                            {task.priority === 'high' && (
                              <Badge variant="destructive">Высокий приоритет</Badge>
                            )}
                            {task.priority === 'medium' && (
                              <Badge className="bg-[#F39C12]">Средний приоритет</Badge>
                            )}
                            {task.priority === 'low' && (
                              <Badge variant="outline">Низкий приоритет</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mt-3">
                            <Icon name="Clock" size={16} />
                            {task.time}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Настройки</h2>
                <p className="text-gray-600 mt-1">Профиль и интеграции</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Профиль пользователя</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Имя</label>
                      <input
                        type="text"
                        defaultValue="Менеджер"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AA0E2]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        defaultValue="manager@amocrm.ru"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AA0E2]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Телефон</label>
                      <input
                        type="tel"
                        defaultValue="+7 (999) 123-45-67"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AA0E2]"
                      />
                    </div>
                    <Button className="w-full bg-[#4AA0E2] hover:bg-[#3A90D2]">
                      Сохранить изменения
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Интеграция с AmoCRM</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-[#2ECC71] bg-opacity-10 border border-[#2ECC71] rounded-lg">
                      <div className="flex items-center gap-2 text-[#2ECC71] mb-2">
                        <Icon name="CheckCircle" size={20} />
                        <span className="font-semibold">Подключено</span>
                      </div>
                      <p className="text-sm text-gray-600">API синхронизирован успешно</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">API Token</label>
                      <input
                        type="password"
                        defaultValue="••••••••••••••••"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AA0E2]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Домен AmoCRM</label>
                      <input
                        type="text"
                        defaultValue="yourcompany.amocrm.ru"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AA0E2]"
                      />
                    </div>
                    <Button variant="outline" className="w-full">
                      Пересинхронизировать
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;

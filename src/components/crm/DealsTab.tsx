import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const deals = [
  { id: 1, title: 'Разработка сайта', client: 'ООО "Ромашка"', amount: 250000, stage: 'Переговоры', progress: 65 },
  { id: 2, title: 'CRM внедрение', client: 'ИП Иванов', amount: 180000, stage: 'В работе', progress: 40 },
  { id: 3, title: 'SEO продвижение', client: 'ООО "Цветок"', amount: 95000, stage: 'Новые', progress: 15 },
  { id: 4, title: 'Мобильное приложение', client: 'ООО "Техно"', amount: 450000, stage: 'Переговоры', progress: 80 },
];

const DealsTab = () => {
  return (
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
  );
};

export default DealsTab;

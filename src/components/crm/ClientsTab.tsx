import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const clients = [
  { id: 1, name: 'Анна Петрова', company: 'ООО "Ромашка"', deals: 3, revenue: 750000, status: 'active' },
  { id: 2, name: 'Иван Иванов', company: 'ИП Иванов', deals: 2, revenue: 320000, status: 'active' },
  { id: 3, name: 'Мария Сидорова', company: 'ООО "Цветок"', deals: 1, revenue: 95000, status: 'new' },
  { id: 4, name: 'Петр Васильев', company: 'ООО "Техно"', deals: 4, revenue: 1200000, status: 'vip' },
];

const ClientsTab = () => {
  return (
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
  );
};

export default ClientsTab;

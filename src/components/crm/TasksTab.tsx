import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const tasks = [
  { id: 1, title: 'Позвонить клиенту по проекту', client: 'ООО "Ромашка"', time: '14:00', priority: 'high' },
  { id: 2, title: 'Отправить коммерческое предложение', client: 'ИП Иванов', time: '16:30', priority: 'medium' },
  { id: 3, title: 'Встреча с заказчиком', client: 'ООО "Техно"', time: 'Завтра 10:00', priority: 'high' },
  { id: 4, title: 'Подготовить отчет', client: 'ООО "Цветок"', time: 'Завтра', priority: 'low' },
];

const TasksTab = () => {
  return (
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
  );
};

export default TasksTab;

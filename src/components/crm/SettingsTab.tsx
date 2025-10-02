import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SettingsTab = () => {
  return (
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
  );
};

export default SettingsTab;

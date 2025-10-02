import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  { month: 'Янв', value: 4500 },
  { month: 'Фев', value: 5200 },
  { month: 'Мар', value: 4800 },
  { month: 'Апр', value: 6100 },
  { month: 'Май', value: 7300 },
  { month: 'Июн', value: 6800 },
];

const AnalyticsTab = () => {
  return (
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
  );
};

export default AnalyticsTab;

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface ClientDashboardProps {
  phone: string;
  onLogout: () => void;
}

const clientData = {
  name: 'Иван Петров',
  phone: '+7 (999) 123-45-67',
  currentLoan: {
    amount: 50000,
    paid: 35000,
    remaining: 15000,
    nextPayment: '15.10.2025',
    nextAmount: 5000,
    progress: 70,
  },
  loans: [
    { id: 1, amount: 50000, date: '01.09.2025', status: 'active', paid: 35000 },
    { id: 2, amount: 30000, date: '15.06.2025', status: 'closed', paid: 30000 },
    { id: 3, amount: 20000, date: '10.04.2025', status: 'closed', paid: 20000 },
  ],
  payments: [
    { id: 1, amount: 5000, date: '01.10.2025', status: 'success' },
    { id: 2, amount: 5000, date: '01.09.2025', status: 'success' },
    { id: 3, amount: 5000, date: '01.08.2025', status: 'success' },
  ],
};

const ClientDashboard = ({ phone, onLogout }: ClientDashboardProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'loans' | 'payments'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Wallet" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{clientData.name}</h1>
                <p className="text-sm text-gray-600">{phone}</p>
              </div>
            </div>
            <Button variant="ghost" onClick={onLogout}>
              <Icon name="LogOut" size={20} className="mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Обзор
          </button>
          <button
            onClick={() => setActiveTab('loans')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'loans'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Займы
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'payments'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Платежи
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Текущий займ</span>
                  <Badge className="bg-green-600">Активный</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Сумма займа</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {clientData.currentLoan.amount.toLocaleString()} ₽
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Осталось выплатить</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {clientData.currentLoan.remaining.toLocaleString()} ₽
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">Прогресс выплаты</p>
                    <p className="text-sm font-medium">{clientData.currentLoan.progress}%</p>
                  </div>
                  <Progress value={clientData.currentLoan.progress} className="h-3" />
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" size={20} className="text-blue-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Следующий платёж</p>
                      <p className="text-lg font-bold text-blue-600 mt-1">
                        {clientData.currentLoan.nextAmount.toLocaleString()} ₽
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        до {clientData.currentLoan.nextPayment}
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оплатить
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon name="CheckCircle" size={24} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Выплачено</p>
                      <p className="text-lg font-bold text-gray-900">
                        {clientData.currentLoan.paid.toLocaleString()} ₽
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Всего займов</p>
                      <p className="text-lg font-bold text-gray-900">{clientData.loans.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Платежей</p>
                      <p className="text-lg font-bold text-gray-900">{clientData.payments.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Нужен новый займ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Подайте заявку на новый займ прямо сейчас. Решение за 15 минут.
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Подать заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'loans' && (
          <div className="space-y-4">
            {clientData.loans.map((loan) => (
              <Card key={loan.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {loan.amount.toLocaleString()} ₽
                        </h3>
                        {loan.status === 'active' ? (
                          <Badge className="bg-green-600">Активный</Badge>
                        ) : (
                          <Badge variant="outline">Закрыт</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">Дата оформления: {loan.date}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Выплачено: {loan.paid.toLocaleString()} ₽
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="FileText" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            {clientData.payments.map((payment) => (
              <Card key={payment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {payment.amount.toLocaleString()} ₽
                        </p>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-600">Успешно</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;

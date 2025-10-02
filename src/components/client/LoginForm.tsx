import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface LoginFormProps {
  onLogin: (phone: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setStep('code');
      setIsLoading(false);
    }, 1000);
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      onLogin(phone);
    }, 1000);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    if (cleaned.length <= 1) return `+7 (${cleaned}`;
    if (cleaned.length <= 4) return `+7 (${cleaned.slice(1)}`;
    if (cleaned.length <= 7) return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
    if (cleaned.length <= 9) return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <Icon name="Wallet" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Личный кабинет</CardTitle>
          <p className="text-gray-600">
            {step === 'phone' ? 'Введите номер телефона' : 'Введите код из СМС'}
          </p>
        </CardHeader>
        <CardContent>
          {step === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Номер телефона
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="text-lg"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={phone.length < 18 || isLoading}
              >
                {isLoading ? 'Отправка...' : 'Получить код'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Код из СМС
                </label>
                <Input
                  type="text"
                  placeholder="_ _ _ _"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="text-lg text-center tracking-widest"
                  maxLength={4}
                  required
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Код отправлен на {phone}
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={code.length < 4 || isLoading}
              >
                {isLoading ? 'Проверка...' : 'Войти'}
              </Button>
              <Button 
                type="button" 
                variant="ghost"
                className="w-full"
                onClick={() => setStep('phone')}
              >
                Изменить номер
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;

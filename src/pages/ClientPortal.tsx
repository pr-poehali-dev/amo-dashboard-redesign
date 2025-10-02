import { useState } from 'react';
import LoginForm from '@/components/client/LoginForm';
import ClientDashboard from '@/components/client/ClientDashboard';

const ClientPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clientPhone, setClientPhone] = useState('');

  const handleLogin = (phone: string) => {
    setClientPhone(phone);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setClientPhone('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ClientDashboard phone={clientPhone} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default ClientPortal;

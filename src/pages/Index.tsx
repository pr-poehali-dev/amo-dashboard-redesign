import { useState } from 'react';
import Sidebar from '@/components/crm/Sidebar';
import DashboardTab from '@/components/crm/DashboardTab';
import DealsTab from '@/components/crm/DealsTab';
import ClientsTab from '@/components/crm/ClientsTab';
import AnalyticsTab from '@/components/crm/AnalyticsTab';
import TasksTab from '@/components/crm/TasksTab';
import SettingsTab from '@/components/crm/SettingsTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'deals' && <DealsTab />}
          {activeTab === 'clients' && <ClientsTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'tasks' && <TasksTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </main>
      </div>
    </div>
  );
};

export default Index;

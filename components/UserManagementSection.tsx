import React, { useState } from 'react';
import { User, UserRole } from '../types';

const roles: UserRole[] = ['Owner', 'Manager', 'Sales Manager', 'Technical Service', 'Accountant', 'Sales Lead', 'Computer Engineer'];

interface UserManagementSectionProps {
  users: User[];
  onAddUser: (user: Omit<User, 'id' | 'hasSetPassword'>) => void;
  onUpdateUser: (userId: string, updates: Partial<User>) => void;
  onResetPassword: (userId: string) => void;
  onToggleStatus: (user: User) => void;
}

const UserManagementSection: React.FC<UserManagementSectionProps> = ({ users, onAddUser, onUpdateUser, onResetPassword, onToggleStatus }) => {
  const [form, setForm] = useState({ name: '', username: '', role: 'Manager' as UserRole, email: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.username.trim()) return;

    onAddUser({
      name: form.name.trim(),
      username: form.username.trim().toLowerCase(),
      description: form.role,
      role: form.role,
      status: 'active',
      email: form.email.trim() || undefined,
      password: 'password123',
    });
    setForm({ name: '', username: '', role: 'Manager', email: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">User Management</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add User</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input required placeholder="Full name" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md" />
          <input required placeholder="Username" value={form.username} onChange={event => setForm({ ...form, username: event.target.value })} className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md" />
          <select value={form.role} onChange={event => setForm({ ...form, role: event.target.value as UserRole })} className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md">
            {roles.map(role => <option key={role}>{role}</option>)}
          </select>
          <input type="email" placeholder="Email (optional)" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md" />
          <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Add User</button>
        </form>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">New development users start with password123 and must change it after first login.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {users.map(user => (
            <li key={user.id} className="p-4 flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-48">
                <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">@{user.username || user.name.toLowerCase()}</p>
              </div>
              <select value={user.role || user.description} onChange={event => onUpdateUser(user.id, { role: event.target.value as UserRole, description: event.target.value })} className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md text-sm">
                {roles.map(role => <option key={role}>{role}</option>)}
              </select>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.status === 'disabled' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                {user.status || 'active'}
              </span>
              <button onClick={() => onResetPassword(user.id)} className="text-sm text-indigo-600 hover:underline">Reset password</button>
              <button onClick={() => onToggleStatus(user)} className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                {user.status === 'disabled' ? 'Enable' : 'Disable'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagementSection;

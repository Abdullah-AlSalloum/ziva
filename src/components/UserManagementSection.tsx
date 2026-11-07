import React, { useEffect, useState } from 'react';
import { User, UserRole } from '../types';
import { PlusIcon, UserGroupIcon } from './icons';
import Avatar from './Avatar';
import DropdownMenu from './DropdownMenu';
import { formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

const roles: UserRole[] = ['Owner', 'Manager', 'Sales Manager', 'Technical Service', 'Accountant', 'Sales Lead', 'Computer Engineer'];
const roleTranslationKeys: Record<UserRole, string> = {
  Owner: 'userManagement.roleOwner',
  Manager: 'userManagement.roleManager',
  'Sales Manager': 'userManagement.roleSalesManager',
  'Technical Service': 'userManagement.roleTechnicalService',
  Accountant: 'userManagement.roleAccountant',
  'Sales Lead': 'userManagement.roleSalesLead',
  'Computer Engineer': 'userManagement.roleComputerEngineer',
};

interface UserManagementSectionProps {
  users: User[];
  onAddUser: (user: Omit<User, 'id' | 'hasSetPassword'>) => void;
  onUpdateUser: (userId: string, updates: Partial<User>) => void;
  onToggleStatus: (user: User) => void;
}

const UserManagementSection: React.FC<UserManagementSectionProps> = ({ users, onAddUser, onUpdateUser, onToggleStatus }) => {
  const { language, t } = useTranslation(translations);
  const [form, setForm] = useState({ name: '', username: '', role: 'Manager' as UserRole, email: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const activeUsers = users.filter(user => user.status !== 'disabled').length;
  const disabledUsers = users.length - activeUsers;
  const totalPages = Math.max(1, Math.ceil(users.length / pageSize));
  const paginatedUsers = users.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);

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
    });
    setForm({ name: '', username: '', role: 'Manager', email: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('userManagement.title')}</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('userManagement.subtitle')}</p>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            <PlusIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('userManagement.addUser')}</h3>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr_auto]">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{t('userManagement.fullName')}</span>
            <input required placeholder={t('userManagement.fullNamePlaceholder')} value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{t('userManagement.username')}</span>
            <input required placeholder={t('userManagement.usernamePlaceholder')} value={form.username} onChange={event => setForm({ ...form, username: event.target.value })} className="mt-2 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{t('userManagement.role')}</span>
            <div className="mt-2">
              <DropdownMenu
                value={form.role}
                options={roles.map(role => ({ value: role, label: t(roleTranslationKeys[role]) }))}
                onChange={value => setForm({ ...form, role: value as UserRole })}
                ariaLabel={t('userManagement.role')}
              />
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{t('userManagement.email')} <span className="font-normal normal-case">({t('userManagement.optional')})</span></span>
            <input type="email" placeholder={t('userManagement.emailPlaceholder')} value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </label>
          <button type="submit" className="inline-flex items-center justify-center gap-2 self-end rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <PlusIcon className="h-5 w-5" /> {t('userManagement.addUser')}
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{t('userManagement.cognitoHint')}</p>
      </div>

      <div className="overflow-visible rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
        <div className="flex flex-wrap items-center gap-3 border-b border-gray-200/80 px-5 py-4 dark:border-gray-700/80 sm:px-6">
          <UserGroupIcon className="h-5 w-5 text-gray-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">{t('userManagement.teamMembers')}</h3>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">{users.length}</span>
          <div className="flex w-full gap-2 text-xs font-semibold sm:ml-auto sm:w-auto">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">{activeUsers} {t('userManagement.active')}</span>
            {disabledUsers > 0 && <span className="rounded-full bg-red-100 px-2.5 py-1 text-red-700 dark:bg-red-900/40 dark:text-red-300">{disabledUsers} {t('userManagement.disabled')}</span>}
          </div>
        </div>
        <ul className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
          {paginatedUsers.map(user => (
            <li key={user.id} className="flex flex-col gap-4 px-5 py-5 transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-700/40 sm:flex-row sm:items-center sm:px-6">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <Avatar name={user.name} size="medium" />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900 dark:text-white">{user.name}</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">@{user.username || user.name.toLowerCase()}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                <DropdownMenu
                  value={user.role || user.description}
                  options={roles.map(role => ({ value: role, label: t(roleTranslationKeys[role]) }))}
                  onChange={value => onUpdateUser(user.id, { role: value as UserRole, description: value })}
                  ariaLabel={`${t('userManagement.roleFor')} ${user.name}`}
                  className="w-full sm:w-auto"
                  menuClassName="min-w-52"
                />
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${user.status === 'disabled' ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'}`}>
                  {user.status === 'disabled' ? t('userManagement.disabled') : t('userManagement.active')}
                </span>
                <button onClick={() => onToggleStatus(user)} className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                {user.status === 'disabled' ? t('userManagement.enable') : t('userManagement.disable')}
                </button>
              </div>
            </li>
          ))}
        </ul>
        {users.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-gray-200/80 px-5 py-4 dark:border-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('userManagement.paginationShowing')
                .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
                .replace('{to}', formatNumber(Math.min(currentPage * pageSize, users.length), language))
                .replace('{total}', formatNumber(users.length, language))}
            </p>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {t('userManagement.paginationPrevious')}
              </button>
              <span className="min-w-20 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                {formatNumber(currentPage, language)} / {formatNumber(totalPages, language)}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {t('userManagement.paginationNext')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementSection;

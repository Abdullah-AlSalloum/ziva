import React, { useState } from 'react';
import { Task, User, TaskStatus } from '../types';
import { PlusIcon, TrashIcon } from './icons';
import Avatar from './Avatar';
import { formatDate, useTranslation } from '../i18n';
import { translations } from '../translations';

interface TaskSectionProps {
  tasks: Task[];
  users: User[];
  onAddTask: (task: Omit<Task, 'id' | 'createdBy' | 'createdAt'>) => void;
  onRemoveTask: (taskId: string) => void;
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
}

const statusColors: { [key in TaskStatus]: string } = {
  'To Do': 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100',
  'In Progress': 'bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Completed': 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200',
};

const TaskSection: React.FC<TaskSectionProps> = ({ tasks, users, onAddTask, onRemoveTask, onUpdateTaskStatus }) => {
  const { language, t } = useTranslation(translations);
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState<string>(users[0]?.id ?? '');
  const [dueDate, setDueDate] = useState('');
  
  const getUser = (userId: string) => users.find(u => u.id === userId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && assignedTo && dueDate) {
      onAddTask({ description, assignedTo, dueDate, status: 'To Do' });
      setDescription('');
      setDueDate('');
    }
  };
  
  const handleRemoveClick = (taskId: string) => {
    if (window.confirm(t('tasks.removeConfirmation'))) {
        onRemoveTask(taskId);
    }
  };

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    if (newStatus === 'Completed') {
        if (window.confirm(t('tasks.completeConfirmation'))) {
            onUpdateTaskStatus(taskId, newStatus);
        }
    } else {
        onUpdateTaskStatus(taskId, newStatus);
    }
  };
  
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('tasks.title')}</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{t('tasks.assignNew')}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-3">
            <label htmlFor="task-desc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('tasks.description')}</label>
            <input type="text" id="task-desc" value={description} onChange={e => setDescription(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="task-assignee" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('tasks.assignTo')}</label>
            <select id="task-assignee" value={assignedTo} onChange={e => setAssignedTo(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
              {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
          </div>
          <div className="md:col-span-1">
            <label htmlFor="task-due" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('tasks.dueDate')}</label>
            <input type="date" id="task-due" value={dueDate} min={today} onChange={e => setDueDate(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
          <div className="md:col-span-1 flex items-end">
            <button type="submit" className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              <PlusIcon className="w-5 h-5 mr-2" /> {t('tasks.add')}
            </button>
          </div>
        </form>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('tasks.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('tasks.emptyHint')}</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {tasks.map(task => {
              const user = getUser(task.assignedTo);
              const creator = getUser(task.createdBy);
              return (
              <li key={task.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-lg font-medium text-gray-900 dark:text-white truncate">{task.description}</p>
                        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                           <div className="flex items-center" title={`${t('tasks.assignedTo')} ${user?.name ?? ''}`}>
                                <strong className="font-medium text-gray-600 dark:text-gray-300 mr-1.5">{t('tasks.to')}</strong>
                                {user && <Avatar name={user.name} size="small"/>}
                                <span className="ml-2">{user?.name || 'N/A'}</span>
                            </div>
                            {creator && (
                                <div className="flex items-center" title={`${t('tasks.createdBy')} ${creator.name}`}>
                                    <strong className="font-medium text-gray-600 dark:text-gray-300 mr-1.5">{t('tasks.by')}</strong>
                                    <Avatar name={creator.name} size="small"/>
                                    <span className="ml-2">{creator.name}</span>
                                </div>
                            )}
                            <div>
                                <strong className="font-medium text-gray-600 dark:text-gray-300 mr-1.5">{t('tasks.due')}</strong>
                                <span>{formatDate(task.dueDate, language)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <select value={task.status} onChange={e => handleStatusChange(task.id, e.target.value as TaskStatus)} className={`text-sm font-medium rounded-md border-0 focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-gray-800 focus:ring-sky-500 ${statusColors[task.status]}`}>
                            <option value="To Do">{t('tasks.statusToDo')}</option>
                            <option value="In Progress">{t('tasks.statusInProgress')}</option>
                            <option value="Completed">{t('tasks.statusCompleted')}</option>
                        </select>
                        <button onClick={() => handleRemoveClick(task.id)} className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={t('tasks.remove')}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            )})}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskSection;
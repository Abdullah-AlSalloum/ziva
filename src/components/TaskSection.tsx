import React, { useEffect, useState } from 'react';
import { Task, User, TaskStatus } from '../types';
import { ClipboardDocumentCheckIcon, PlusIcon, TrashIcon } from './icons';
import DropdownMenu from './DropdownMenu';
import Avatar from './Avatar';
import { formatDate, formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

interface TaskSectionProps {
  tasks: Task[];
  users: User[];
  onAddTask: (task: Omit<Task, 'id' | 'createdBy' | 'createdAt'>) => void;
  onRemoveTask: (taskId: string) => void;
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
}

const statusColors: { [key in TaskStatus]: string } = {
  'To Do': 'border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200',
  'In Progress': 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-200',
  'Completed': 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200',
};

const TaskSection: React.FC<TaskSectionProps> = ({ tasks, users, onAddTask, onRemoveTask, onUpdateTaskStatus }) => {
  const { language, t } = useTranslation(translations);
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState<string>(users[0]?.id ?? '');
  const [dueDate, setDueDate] = useState('');
  const [pendingConfirmation, setPendingConfirmation] = useState<{ message: string; onConfirm: () => void } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
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
    setPendingConfirmation({ message: t('tasks.removeConfirmation'), onConfirm: () => onRemoveTask(taskId) });
  };

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    if (newStatus === 'Completed') {
        setPendingConfirmation({ message: t('tasks.completeConfirmation'), onConfirm: () => onUpdateTaskStatus(taskId, newStatus) });
    } else {
        onUpdateTaskStatus(taskId, newStatus);
    }
  };
  
  const today = new Date().toISOString().split('T')[0];
  const totalPages = Math.max(1, Math.ceil(tasks.length / pageSize));
  const paginatedTasks = tasks.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);

  return (
    <div className="space-y-6">
      {pendingConfirmation && <ConfirmDialog message={pendingConfirmation.message} onCancel={() => setPendingConfirmation(null)} onConfirm={() => { pendingConfirmation.onConfirm(); setPendingConfirmation(null); }} />}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('tasks.title')}</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('tasks.emptyHint')}</p>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
            <PlusIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('tasks.assignNew')}</h3>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 items-end gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(200px,1fr)_minmax(190px,0.8fr)_auto]">
          <div>
            <label htmlFor="task-desc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('tasks.description')}</label>
            <input type="text" id="task-desc" value={description} onChange={e => setDescription(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="task-assignee" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('tasks.assignTo')}</label>
            <div className="mt-2">
              <DropdownMenu
                id="task-assignee"
                value={assignedTo}
                options={users.map(user => ({ value: user.id, label: user.name }))}
                onChange={setAssignedTo}
                ariaLabel={t('tasks.assignTo')}
                className="border-sky-300 hover:border-sky-400 hover:bg-sky-50 focus:ring-sky-500/30 dark:border-sky-700"
                menuClassName="border-sky-200 dark:border-sky-800"
              />
            </div>
          </div>
          <div>
            <label htmlFor="task-due" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('tasks.dueDate')}</label>
            <input type="date" id="task-due" value={dueDate} min={today} onChange={e => setDueDate(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </div>
          <div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 lg:w-auto">
              <PlusIcon className="h-5 w-5" /> {t('tasks.add')}
            </button>
          </div>
        </form>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-700">
            <ClipboardDocumentCheckIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{t('tasks.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('tasks.emptyHint')}</p>
        </div>
      ) : (
        <div className="overflow-visible rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <ul role="list" className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
            {paginatedTasks.map(task => {
              const user = getUser(task.assignedTo);
              const creator = getUser(task.createdBy);
              return (
              <li key={task.id} className="px-4 py-5 transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/40 sm:px-6">
                <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="min-w-0">
                        <p className="text-base font-semibold leading-6 text-gray-900 dark:text-white">{task.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
                           <div className="flex items-center gap-2" title={`${t('tasks.assignedTo')} ${user?.name ?? ''}`}>
                                <strong className="font-medium text-gray-600 dark:text-gray-300">{t('tasks.to')}</strong>
                                {user && <Avatar name={user.name} size="small"/>}
                                <span>{user?.name || 'N/A'}</span>
                            </div>
                            {creator && (
                                <div className="flex items-center gap-2" title={`${t('tasks.createdBy')} ${creator.name}`}>
                                    <strong className="font-medium text-gray-600 dark:text-gray-300">{t('tasks.by')}</strong>
                                    <Avatar name={creator.name} size="small"/>
                                    <span>{creator.name}</span>
                                </div>
                            )}
                            <div>
                                <strong className="font-medium text-gray-600 dark:text-gray-300">{t('tasks.due')}</strong>{' '}
                                <span>{formatDate(task.dueDate, language)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <div className="w-72 shrink-0">
                          <DropdownMenu
                            value={task.status}
                            options={[
                              { value: 'To Do', label: t('tasks.statusToDo') },
                              { value: 'In Progress', label: t('tasks.statusInProgress') },
                              { value: 'Completed', label: t('tasks.statusCompleted') },
                            ]}
                            onChange={value => handleStatusChange(task.id, value as TaskStatus)}
                            ariaLabel={`${t('tasks.status')} ${task.description}`}
                            className={`border ${statusColors[task.status]}`}
                            menuClassName="min-w-0"
                          />
                        </div>
                        <button onClick={() => handleRemoveClick(task.id)} className="rounded-xl p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label={t('tasks.remove')}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            )})}
          </ul>
        </div>
      )}
      {tasks.length > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('tasks.paginationShowing')
              .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
              .replace('{to}', formatNumber(Math.min(currentPage * pageSize, tasks.length), language))
              .replace('{total}', formatNumber(tasks.length, language))}
          </p>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('tasks.paginationPrevious')}
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
              {t('tasks.paginationNext')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskSection;
import React from 'react';
import { AuditEvent } from '../types';
import { ClockIcon } from './icons';
import { formatDate, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

interface AuditSectionProps {
  events: AuditEvent[];
}

const AuditSection: React.FC<AuditSectionProps> = ({ events }) => {
  const { language, t } = useTranslation(translations);

  return (
    <section className="space-y-5">
      <header className="flex flex-col gap-3 border-b border-slate-200 pb-5 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{t('audit.title')}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('audit.subtitle')}</p>
        </div>
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          <ClockIcon className="h-4 w-4 text-indigo-500" />
          <span>{events.length}</span>
          <span>{t('audit.events')}</span>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {events.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <ClockIcon className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-700" />
            <h2 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{t('audit.emptyTitle')}</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">{t('audit.emptyDescription')}</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {events.map(event => (
              <article key={event.id} className="grid gap-3 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                      {event.action}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{event.targetEntityType}</span>
                    <span className="truncate text-sm text-slate-500 dark:text-slate-400">{event.targetEntityId}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {event.actorRole} · {event.actorId}
                  </p>
                </div>
                <time dateTime={event.createdAt} className="text-sm text-slate-500 dark:text-slate-400 sm:text-right">
                  {formatDate(event.createdAt, language)}
                </time>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AuditSection;

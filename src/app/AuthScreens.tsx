import React, { FC, useEffect, useState } from 'react';
import { User } from '../types';
import Avatar from '../components/Avatar';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from '../components/icons';
import { createTranslator, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

export const LoadingScreen: FC<{ message: string; variant?: 'default' | 'workspace' }> = ({ message, variant = 'default' }) => {
  if (variant === 'workspace') {
    return (
      <div className="min-h-screen bg-slate-50 p-4 dark:bg-slate-950 sm:p-6" aria-busy="true" aria-live="polite">
        <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl gap-4 sm:min-h-[calc(100vh-3rem)] sm:gap-6">
          <aside className="hidden w-56 shrink-0 rounded-2xl bg-slate-900 p-4 shadow-sm sm:block dark:bg-slate-900">
            <div className="h-8 w-32 animate-pulse rounded-lg bg-slate-700" />
            <div className="mt-10 space-y-3">
              {[1, 2, 3, 4, 5].map(item => <div key={item} className="h-10 animate-pulse rounded-xl bg-slate-800" />)}
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="flex h-16 items-center justify-between rounded-2xl bg-white px-4 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800 sm:px-6">
              <div className="h-7 w-36 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
              <div className="h-9 w-28 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700" />
            </div>
            <main className="mt-5 space-y-5 sm:mt-6">
              <div>
                <div className="h-8 w-52 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
                <div className="mt-3 h-4 w-72 max-w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map(item => <div key={item} className="h-28 animate-pulse rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800" />)}
              </div>
              <div className="h-72 animate-pulse rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800" />
              <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">{message}</p>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center dark:bg-slate-950">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/20">
        <svg className="h-8 w-8 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
      <p className="mt-5 max-w-sm text-sm font-medium text-slate-600 dark:text-slate-300">{message}</p>
    </div>
  );
};

export const LoginPage: FC<{
  users: User[];
  onLogin: (username: string, password: string) => void;
  onRegister?: (user: Omit<User, 'id' | 'hasSetPassword'>, password: string) => void;
  isLocalDevelopment?: boolean;
  error?: string;
}> = ({ users, onLogin, onRegister, isLocalDevelopment = false, error: externalError }) => {
  const t = createTranslator(translations, 'ar');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (!password) {
      setError(t('auth.enterPassword'));
      return;
    }
    onLogin(username.trim(), password);
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (!name.trim() || !username.trim() || !email.trim() || !password) {
      setError(t('auth.completeAllFields'));
      return;
    }
    onRegister?.({
      name: name.trim(),
      username: username.trim().toLowerCase(),
      description: 'Owner',
      role: 'Owner',
      status: 'active',
      email: email.trim(),
    }, password);
  };

  return (
    <div dir="rtl" lang="ar" className="arabic-auth relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/35 blur-3xl dark:bg-indigo-500/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-500/10" />
      <div className="relative w-full max-w-md">
        <div className="mb-7 text-center sm:mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 ring-1 ring-indigo-500/20 dark:bg-indigo-500">
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{t('app.name')}</h1>
          </div>
        </div>
        <div className="app-card rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.45)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95 sm:p-9">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              {isLocalDevelopment && users.length === 0 ? t('auth.localSetupTitle') : t('auth.signInTitle')}
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              {isLocalDevelopment && users.length === 0 ? t('auth.localSetupSubtitle') : t('auth.signInSubtitle')}
            </p>
          </div>
          {isLocalDevelopment && users.length === 0 ? (
            <form onSubmit={handleRegister} className="space-y-5">
              <label className="block text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t('userManagement.fullName')}
                <input required autoFocus value={name} onChange={event => setName(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label className="block text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t('auth.usernameOrEmail')}
                <input required dir="ltr" value={username} onChange={event => setUsername(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label className="block text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t('userManagement.email')}
                <input required type="email" dir="ltr" value={email} onChange={event => setEmail(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label className="block text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t('auth.password')}
                <input required type="password" dir="ltr" value={password} onChange={event => setPassword(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              {(error || externalError) && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-right text-sm font-medium leading-6 text-red-700">{error || externalError}</p>}
              <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700">{t('auth.createLocalUser')}</button>
            </form>
          ) : <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t('auth.usernameOrEmail')}
              <input required autoFocus autoComplete="username" dir="ltr" value={username} onChange={event => setUsername(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm transition placeholder:text-slate-400 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600" />
            </label>
            <label className="block text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t('auth.password')}
              <div className="relative mt-1">
                <input required type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-left text-slate-900 shadow-sm transition placeholder:text-slate-400 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600" />
                <button type="button" onClick={() => setShowPassword(previous => !previous)} aria-label={showPassword ? t('auth.hidePassword') : t('auth.showPassword')} className="absolute inset-y-0 left-0 flex w-11 items-center justify-center text-slate-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-300">
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </label>
            {(error || externalError) && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-right text-sm font-medium leading-6 text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">{error || externalError}</p>}
            <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-600/30 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:translate-y-0 dark:bg-indigo-500 dark:hover:bg-indigo-400">{t('auth.signIn')}</button>
          </form>}
        </div>
      </div>
    </div>
  );
};

export const AuthModal: FC<{
  selectedUser: User;
  onLogin: (password: string) => void;
  onClose: () => void;
}> = ({ selectedUser, onLogin, onClose }) => {
  const t = createTranslator(translations, 'ar');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!password) {
      setError(t('auth.passwordEmpty'));
      return;
    }
    onLogin(password);
  };

  return (
    <div dir="rtl" lang="ar" className="arabic-auth fixed inset-0 z-40 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/10 sm:p-8" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <div className="flex flex-col items-center mb-6">
          <Avatar name={selectedUser.name} size="large" />
          <h2 id="auth-modal-title" className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{selectedUser.name}</h2>
          <p className="text-gray-500 dark:text-gray-400">{selectedUser.description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <LockClosedIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            <input required type={showPassword ? 'text' : 'password'} autoFocus value={password} onChange={event => setPassword(event.target.value)} className="block w-full pl-10 pr-10 py-2 rounded-md dark:bg-gray-700 dark:text-white" placeholder={t('auth.password')} />
            <button type="button" onClick={() => setShowPassword(previous => !previous)} aria-label={showPassword ? t('auth.hidePassword') : t('auth.showPassword')} className="absolute left-3 top-2.5 text-gray-400">
              {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button type="submit" className="w-full py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">{t('auth.signIn')}</button>
          <button type="button" onClick={onClose} className="w-full text-center py-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">{t('auth.cancel')}</button>
        </form>
      </div>
    </div>
  );
};

export const PasswordModal: FC<{
  onSave: (passwords: Record<string, string>) => void;
  onClose: () => void;
  isFirstTimeSetup?: boolean;
}> = ({ onSave, onClose, isFirstTimeSetup = false }) => {
  const t = createTranslator(translations, 'ar');
  const translatedTitle = isFirstTimeSetup ? t('auth.setNewPassword') : t('auth.changePassword');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newPassword.length < 6) {
      setError(t('auth.passwordMinLength'));
      return;
    }
    if (newPassword !== confirmPassword) {
      setError(t('auth.passwordMismatch'));
      return;
    }
    onSave({ currentPassword, newPassword });
  };

  return (
    <div dir="rtl" lang="ar" className="arabic-auth fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px]">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/10" role="dialog" aria-modal="true" aria-labelledby="password-modal-title">
        <form onSubmit={handleSubmit}>
          <div className="p-6 sm:p-8">
            <h2 id="password-modal-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">{translatedTitle}</h2>
            {isFirstTimeSetup && <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{t('auth.passwordSetupHint')}</p>}
            <div className="mt-6 space-y-4">
              {!isFirstTimeSetup && (
                <div>
                  <label htmlFor="current-password" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">{t('auth.currentPassword')}</label>
                  <input id="current-password" type="password" value={currentPassword} onChange={event => setCurrentPassword(event.target.value)} required autoFocus autoComplete="current-password" aria-invalid={Boolean(error)} aria-describedby={error ? 'password-modal-error' : undefined} className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400" />
                </div>
              )}
              <div>
                <label htmlFor="new-password" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">{t('auth.newPassword')}</label>
                <input id="new-password" type="password" value={newPassword} onChange={event => setNewPassword(event.target.value)} required autoFocus={isFirstTimeSetup} autoComplete="new-password" aria-invalid={Boolean(error)} aria-describedby={error ? 'password-modal-error' : undefined} className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400" />
              </div>
              <div>
                <label htmlFor="confirm-new-password" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">{t('auth.confirmNewPassword')}</label>
                <input id="confirm-new-password" type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} required autoComplete="new-password" aria-invalid={Boolean(error)} aria-describedby={error ? 'password-modal-error' : undefined} className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400" />
              </div>
              {error && <p id="password-modal-error" role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">{error}</p>}
            </div>
          </div>
          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/80 sm:flex-row sm:justify-end sm:px-8">
            <button type="button" onClick={onClose} className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700">{t('auth.cancel')}</button>
            <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40">{t('auth.savePassword')}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

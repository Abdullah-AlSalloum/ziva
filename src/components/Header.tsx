import React, { useState, useEffect, useRef } from 'react';
import { User } from '../types';
import { SunIcon, MoonIcon, LogoutIcon, KeyIcon, Bars3Icon, ChevronDownIcon } from './icons';
import Avatar from './Avatar';
import { Language, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

interface HeaderProps {
  currentUser: User;
  onLogout: () => void;
  onOpenChangePassword: () => void;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onLogout, onOpenChangePassword, onToggleSidebar }) => {
  const { t, language, setLanguage } = useTranslation(translations);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const languageOptionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
    } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="app-header relative z-10 shrink-0 bg-white/95 backdrop-blur-sm dark:bg-slate-900/95">
      <div className="mx-auto max-w-full px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center">
            <button
                onClick={onToggleSidebar}
                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
                aria-label={t('nav.openSidebar')}
                aria-controls="app-sidebar"
            >
                <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="ml-1 flex min-w-0 items-center gap-2 lg:ml-0">
              <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" />
              </svg>
              <span className="truncate text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">{t('app.name')}</span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <div ref={languageMenuRef} className="relative" dir="ltr">
              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen(open => !open)}
                onKeyDown={event => {
                  if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsLanguageMenuOpen(true);
                    requestAnimationFrame(() => languageOptionRefs.current[0]?.focus());
                  }
                }}
                aria-haspopup="listbox"
                aria-expanded={isLanguageMenuOpen}
                aria-label={t('header.language')}
                className="flex items-center rounded-xl border border-slate-200 bg-slate-50 py-2 pl-3 pr-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500/60 dark:hover:bg-slate-700"
              >
              <span className="pointer-events-none pl-3 text-indigo-600 dark:text-indigo-400" aria-hidden="true">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="8.5" />
                  <path strokeLinecap="round" d="M3.5 12h17M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z" />
                </svg>
              </span>
                <span className="px-2">{language === 'ar' ? 'العربية' : 'English'}</span>
                <ChevronDownIcon className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                role="listbox"
                aria-label={t('header.languageSelection')}
                className={`absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-full origin-top overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 transition-all duration-200 ease-out dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/30 ${isLanguageMenuOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`}
              >
                {([
                  ['en', t('header.english')],
                  ['ar', t('header.arabic')],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    ref={element => {
                      languageOptionRefs.current[value === 'en' ? 0 : 1] = element;
                    }}
                    role="option"
                    aria-selected={language === value}
                    onKeyDown={event => {
                      const currentIndex = value === 'en' ? 0 : 1;
                      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                        event.preventDefault();
                        const nextIndex = event.key === 'ArrowDown'
                          ? (currentIndex + 1) % 2
                          : (currentIndex - 1 + 2) % 2;
                        languageOptionRefs.current[nextIndex]?.focus();
                      } else if (event.key === 'Escape') {
                        event.preventDefault();
                        setIsLanguageMenuOpen(false);
                      }
                    }}
                    onClick={() => {
                      setLanguage(value);
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm transition-colors ${language === value ? 'bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    <span>{label}</span>
                    {language === value && <span className="ml-3 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={toggleDarkMode} className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700" aria-label={isDarkMode ? t('header.switchToLight') : t('header.switchToDark')}>
              {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
            <div className="flex items-center gap-2 rounded-full bg-slate-50 py-1 pl-1 pr-2 dark:bg-slate-800 sm:gap-3 sm:pr-3">
               <Avatar name={currentUser.name} size="medium" />
                <span className="font-medium text-gray-700 dark:text-gray-200 hidden sm:block">{t('header.welcome')}, {currentUser.name}</span>
            </div>
             <div className="hidden h-6 border-l border-gray-200 dark:border-gray-700 sm:block"></div>
             <button
                onClick={onOpenChangePassword}
                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700"
                aria-label={t('header.changePassword')}
              >
                <KeyIcon className="h-6 w-6" />
            </button>
             <button
                onClick={onLogout}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label={t('header.logOut')}
              >
                <LogoutIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
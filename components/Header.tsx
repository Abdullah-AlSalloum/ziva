import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { SunIcon, MoonIcon, LogoutIcon, KeyIcon, Bars3Icon } from './icons';
import Avatar from './Avatar';

interface HeaderProps {
  currentUser: User;
  onLogout: () => void;
  onOpenChangePassword: () => void;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onLogout, onOpenChangePassword, onToggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <header className="bg-white dark:bg-gray-800 shadow-sm relative z-10 shrink-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
                onClick={onToggleSidebar}
                className="lg:hidden p-2 -ml-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Open sidebar"
            >
                <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2 ml-2 lg:ml-0">
              <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" />
              </svg>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Invictus Manager</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
            <div className="flex items-center space-x-3">
               <Avatar name={currentUser.name} size="medium" />
                <span className="font-medium text-gray-700 dark:text-gray-200 hidden sm:block">Welcome, {currentUser.name}</span>
            </div>
             <div className="border-l border-gray-200 dark:border-gray-700 h-6"></div>
             <button
                onClick={onOpenChangePassword}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Change password"
              >
                <KeyIcon className="h-6 w-6" />
            </button>
             <button
                onClick={onLogout}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Log out"
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
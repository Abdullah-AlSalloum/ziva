import React, { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

const NetworkStatus: React.FC = () => {
  const { t } = useTranslation(translations);
  const [isOnline, setIsOnline] = useState(true);
  const [showRestoredMessage, setShowRestoredMessage] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOffline = () => {
      setIsOnline(false);
      setShowRestoredMessage(false);
    };
    const handleOnline = () => {
      setIsOnline(true);
      setShowRestoredMessage(true);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  useEffect(() => {
    if (!showRestoredMessage) return;
    const timer = window.setTimeout(() => setShowRestoredMessage(false), 3500);
    return () => window.clearTimeout(timer);
  }, [showRestoredMessage]);

  if (isOnline && !showRestoredMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-x-0 top-0 z-[60] px-4 py-2.5 text-center text-sm font-semibold shadow-md ${
        isOnline
          ? 'bg-emerald-600 text-white'
          : 'bg-amber-500 text-amber-950'
      }`}
    >
      {isOnline ? t('network.restored') : t('network.offline')}
    </div>
  );
};

export default NetworkStatus;

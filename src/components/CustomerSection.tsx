import React, { useEffect, useState } from 'react';
import { Laboratory, Contact } from '../types';
import { PlusIcon, TrashIcon, LinkIcon, ClipboardIcon, ClipboardDocumentCheckIcon } from './icons';
import { formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

const CustomerSection: React.FC<{
  laboratories: Laboratory[];
  onAddLaboratory: (laboratory: Omit<Laboratory, 'id' | 'createdAt'>) => void;
  onRemoveLaboratory: (laboratoryId: string) => void;
  onNotify: (message: string, type?: 'success' | 'error' | 'info') => void;
}> = ({ laboratories, onAddLaboratory, onRemoveLaboratory, onNotify }) => {
  const { language, t } = useTranslation(translations);
  const [name, setName] = useState('');
  const [googleMapsLink, setGoogleMapsLink] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([{ name: '', phoneNumber: '' }]);
  const [copiedLabId, setCopiedLabId] = useState<string | null>(null);
  const [pendingRemoval, setPendingRemoval] = useState<{ id: string; message: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(laboratories.length / pageSize));
  const paginatedLaboratories = laboratories.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);

  const handleContactChange = (index: number, field: keyof Contact, value: string) => {
    const newContacts = [...contacts];
    newContacts[index] = { ...newContacts[index], [field]: value };
    setContacts(newContacts);
  };

  const handleAddContactField = () => {
    setContacts([...contacts, { name: '', phoneNumber: '' }]);
  };

  const handleRemoveContactField = (index: number) => {
    if (contacts.length > 1) {
      const newContacts = contacts.filter((_, i) => i !== index);
      setContacts(newContacts);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validContacts = contacts.filter(c => c.name.trim() !== '' || c.phoneNumber.trim() !== '');
    if (name.trim() !== '' && validContacts.length > 0) {
      onAddLaboratory({
        name: name.trim(),
        googleMapsLink: googleMapsLink.trim(),
        contacts: validContacts.map(c => ({ name: c.name.trim(), phoneNumber: c.phoneNumber.trim() })),
      });
      setName('');
      setGoogleMapsLink('');
      setContacts([{ name: '', phoneNumber: '' }]);
    } else {
      onNotify(t('laboratories.validation'), 'error');
    }
  };

  const handleRemoveClick = (lab: Laboratory) => {
    setPendingRemoval({ id: lab.id, message: t('laboratories.removeConfirmation').replace('{name}', lab.name) });
  };

  const handleCopyLink = (lab: Laboratory) => {
    if (!lab.googleMapsLink) return;
    navigator.clipboard.writeText(lab.googleMapsLink).then(() => {
        setCopiedLabId(lab.id);
        setTimeout(() => {
            setCopiedLabId(null);
        }, 2000); // Reset after 2 seconds
    }).catch(err => {
        console.error('Failed to copy link: ', err);
        onNotify(t('laboratories.copyFailed'), 'error');
    });
  };

  return (
    <div className="space-y-6">
      {pendingRemoval && <ConfirmDialog message={pendingRemoval.message} onCancel={() => setPendingRemoval(null)} onConfirm={() => { onRemoveLaboratory(pendingRemoval.id); setPendingRemoval(null); }} />}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('laboratories.title')}</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('laboratories.emptyHint')}</p>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            <PlusIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('laboratories.addNew')}</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <label htmlFor="lab-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('laboratories.name')}</label>
              <input type="text" id="lab-name" value={name} onChange={e => setName(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="lab-maps" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('laboratories.mapsLink')}</label>
              <input type="url" id="lab-maps" value={googleMapsLink} onChange={e => setGoogleMapsLink(e.target.value)} placeholder="https://..." className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
            </div>
          </div>
          
          <div>
            <h4 className="text-md mb-3 font-semibold text-gray-800 dark:text-gray-200">{t('laboratories.contacts')}</h4>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="grid grid-cols-1 items-end gap-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
                  <div>
                    <label htmlFor={`contact-name-${index}`} className="sr-only">{t('laboratories.contactName')}</label>
                    <input type="text" id={`contact-name-${index}`} value={contact.name} onChange={e => handleContactChange(index, 'name', e.target.value)} required placeholder={t('laboratories.contactName')} className="block w-full rounded-xl border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor={`contact-phone-${index}`} className="sr-only">{t('laboratories.phoneNumber')}</label>
                    <input type="tel" id={`contact-phone-${index}`} value={contact.phoneNumber} onChange={e => handleContactChange(index, 'phoneNumber', e.target.value)} placeholder={t('laboratories.phoneNumber')} className="block w-full rounded-xl border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
                  </div>
                  <button
                      type="button"
                      onClick={() => handleRemoveContactField(index)}
                      disabled={contacts.length <= 1}
                      className="justify-self-end rounded-xl p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                      aria-label={t('laboratories.removeContact')}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                </div>
              ))}
            </div>
             <button
                type="button"
                onClick={handleAddContactField}
                className="mt-3 inline-flex items-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <PlusIcon className="h-4 w-4" />
                {t('laboratories.addContact')}
              </button>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto">
              <PlusIcon className="h-5 w-5" /> {t('laboratories.add')}
            </button>
          </div>
        </form>
      </div>

      {laboratories.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-700">
            <ClipboardIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{t('laboratories.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('laboratories.emptyHint')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {paginatedLaboratories.map(lab => (
            <div key={lab.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:p-6">
              <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_auto]">
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{lab.name}</p>
                  {lab.contacts && lab.contacts.length > 0 && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {lab.contacts.map((contact, index) => (
                        <li key={index} className="rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-700/50 dark:text-gray-300">
                          <span className="font-medium">{contact.name}</span>
                          <span className="ml-2 text-gray-500 dark:text-gray-400">{contact.phoneNumber}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex items-center justify-end gap-1">
                  {lab.googleMapsLink && (
                    <div className="flex items-center relative">
                      <a href={lab.googleMapsLink} target="_blank" rel="noopener noreferrer" className="rounded-xl p-2 text-gray-400 hover:bg-purple-100 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:hover:bg-purple-900/50" aria-label={`${t('laboratories.viewMap')} ${lab.name}`}>
                         <LinkIcon className="h-5 w-5" />
                      </a>
                      <button 
                          onClick={() => handleCopyLink(lab)} 
                          className="rounded-xl p-2 text-gray-400 hover:bg-purple-100 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:hover:bg-purple-900/50" 
                          aria-label={`${t('laboratories.copyMap')} ${lab.name}`}
                      >
                          {copiedLabId === lab.id ? <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5" />}
                      </button>
                       {copiedLabId === lab.id && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg animate-fade-in" role="status">
                              {t('laboratories.copied')}
                          </div>
                      )}
                    </div>
                  )}
                  <button onClick={() => handleRemoveClick(lab)} className="rounded-xl p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:hover:bg-red-900/50" aria-label={`${t('laboratories.remove')} ${lab.name}`}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {laboratories.length > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('laboratories.paginationShowing')
              .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
              .replace('{to}', formatNumber(Math.min(currentPage * pageSize, laboratories.length), language))
              .replace('{total}', formatNumber(laboratories.length, language))}
          </p>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('laboratories.paginationPrevious')}
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
              {t('laboratories.paginationNext')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSection;
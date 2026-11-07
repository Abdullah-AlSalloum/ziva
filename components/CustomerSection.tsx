import React, { useState } from 'react';
import { Laboratory, Contact } from '../types';
import { PlusIcon, TrashIcon, LinkIcon, MinusIcon, ClipboardIcon, ClipboardDocumentCheckIcon } from './icons';
import { useTranslation } from '../i18n';
import { translations } from '../translations';

const CustomerSection: React.FC<{
  laboratories: Laboratory[];
  onAddLaboratory: (laboratory: Omit<Laboratory, 'id' | 'createdAt'>) => void;
  onRemoveLaboratory: (laboratoryId: string) => void;
}> = ({ laboratories, onAddLaboratory, onRemoveLaboratory }) => {
  const { t } = useTranslation(translations);
  const [name, setName] = useState('');
  const [googleMapsLink, setGoogleMapsLink] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([{ name: '', phoneNumber: '' }]);
  const [copiedLabId, setCopiedLabId] = useState<string | null>(null);

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
      alert(t('laboratories.validation'));
    }
  };

  const handleRemoveClick = (lab: Laboratory) => {
    if (window.confirm(t('laboratories.removeConfirmation').replace('{name}', lab.name))) {
      onRemoveLaboratory(lab.id);
    }
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
        alert(t('laboratories.copyFailed'));
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('laboratories.title')}</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{t('laboratories.addNew')}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lab-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('laboratories.name')}</label>
              <input type="text" id="lab-name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="lab-maps" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('laboratories.mapsLink')}</label>
              <input type="url" id="lab-maps" value={googleMapsLink} onChange={e => setGoogleMapsLink(e.target.value)} placeholder="https://..." className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{t('laboratories.contacts')}</h4>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                  <div className="flex-1">
                    <label htmlFor={`contact-name-${index}`} className="sr-only">{t('laboratories.contactName')}</label>
                    <input type="text" id={`contact-name-${index}`} value={contact.name} onChange={e => handleContactChange(index, 'name', e.target.value)} required placeholder={t('laboratories.contactName')} className="block w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor={`contact-phone-${index}`} className="sr-only">{t('laboratories.phoneNumber')}</label>
                    <input type="tel" id={`contact-phone-${index}`} value={contact.phoneNumber} onChange={e => handleContactChange(index, 'phoneNumber', e.target.value)} placeholder={t('laboratories.phoneNumber')} className="block w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                  </div>
                  <button
                      type="button"
                      onClick={() => handleRemoveContactField(index)}
                      disabled={contacts.length <= 1}
                      className="p-2 self-center rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={t('laboratories.removeContact')}
                    >
                      <MinusIcon className="h-5 w-5" />
                    </button>
                </div>
              ))}
            </div>
             <button
                type="button"
                onClick={handleAddContactField}
                className="mt-3 inline-flex items-center px-3 py-1.5 border border-dashed border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                {t('laboratories.addContact')}
              </button>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <PlusIcon className="w-5 h-5 mr-2" /> {t('laboratories.add')}
            </button>
          </div>
        </form>
      </div>

      {laboratories.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('laboratories.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('laboratories.emptyHint')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {laboratories.map(lab => (
            <div key={lab.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400 truncate">{lab.name}</p>
                  {lab.contacts && lab.contacts.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {lab.contacts.map((contact, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-medium">{contact.name}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-2">{contact.phoneNumber}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex-shrink-0 flex items-center space-x-1">
                  {lab.googleMapsLink && (
                    <div className="flex items-center relative">
                      <a href={lab.googleMapsLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-400 hover:text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" aria-label={`${t('laboratories.viewMap')} ${lab.name}`}>
                         <LinkIcon className="h-5 w-5" />
                      </a>
                      <button 
                          onClick={() => handleCopyLink(lab)} 
                          className="p-2 rounded-full text-gray-400 hover:text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" 
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
                  <button onClick={() => handleRemoveClick(lab)} className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={`${t('laboratories.remove')} ${lab.name}`}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerSection;
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from './icons';

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownMenuProps {
  id?: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  ariaLabel: string;
  className?: string;
  menuClassName?: string;
  optionClassName?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  id,
  value,
  options,
  onChange,
  ariaLabel,
  className = '',
  menuClassName = '',
  optionClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedOption = options.find(option => option.value === value) ?? options[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const focusOption = (index: number) => {
    requestAnimationFrame(() => optionRefs.current[index]?.focus());
  };

  const openMenu = () => {
    if (options.length === 0) return;
    setIsOpen(true);
    focusOption(Math.max(0, options.findIndex(option => option.value === value)));
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onClick={() => isOpen ? setIsOpen(false) : openMenu()}
        onKeyDown={event => {
          if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openMenu();
          }
        }}
        className={`flex w-full items-center justify-between rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-left text-sm text-gray-900 shadow-sm transition-colors hover:border-indigo-400 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:border-indigo-500/70 dark:hover:bg-gray-600 ${className}`}
      >
        <span className="truncate">{selectedOption?.label ?? ''}</span>
        <ChevronDownIcon className={`ml-3 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        role="listbox"
        aria-label={ariaLabel}
        className={`absolute start-0 top-[calc(100%+0.5rem)] z-[70] max-h-60 w-full origin-top overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl shadow-slate-950/20 transition-all duration-200 ease-out dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/40 ${isOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'} ${menuClassName}`}
      >
        {options.map((option, index) => (
          <button
            key={option.value}
            type="button"
            ref={element => { optionRefs.current[index] = element; }}
            role="option"
            aria-selected={value === option.value}
            onKeyDown={event => {
              if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                const nextIndex = event.key === 'ArrowDown'
                  ? (index + 1) % options.length
                  : (index - 1 + options.length) % options.length;
                optionRefs.current[nextIndex]?.focus();
              } else if (event.key === 'Home' || event.key === 'End') {
                event.preventDefault();
                optionRefs.current[event.key === 'Home' ? 0 : options.length - 1]?.focus();
              } else if (event.key === 'Escape') {
                event.preventDefault();
                setIsOpen(false);
              } else if (event.key === 'Tab') {
                setIsOpen(false);
              }
            }}
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${value === option.value ? 'bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'} ${optionClassName}`}
          >
            <span className="truncate">{option.label}</span>
            {value === option.value && <span className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;

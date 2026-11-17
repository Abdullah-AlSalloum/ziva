import React from 'react';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ loading = false, disabled, children, ...props }) => (
  <button {...props} disabled={loading || disabled} aria-busy={loading}>
    {loading && (
      <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    )}
    <span className="inline-flex items-center gap-2 whitespace-nowrap">{loading ? '...' : children}</span>
  </button>
);

export default LoadingButton;

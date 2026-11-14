import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'نظام إدارة زيفا',
  description: 'نظام إدارة العمليات والمخزون',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { ThemeManagerProvider } from '@/app/providers/ThemeManagerProvider';

export const metadata: Metadata = {
  title: 'Ejaj Ahamed - Portfolio Dashboard',
  description: 'Personal portfolio website of Ejaj Ahamed, a Portfolio Dashboard specializing in modern web technologies.',
  keywords: 'developer, full stack, web development, React, Node.js, TypeScript',
  authors: [{ name: 'Ejaj Ahamed' }],
  openGraph: {
    title: 'Ejaj Ahamed - Portfolio Dashboard',
    description: 'Personal portfolio website showcasing projects and skills in web development.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ThemeManagerProvider>{children}</ThemeManagerProvider>;
}

import type { Metadata } from 'next';
import { ThemeManagerProvider } from './providers/ThemeManagerProvider';

export const metadata: Metadata = {
  title: 'Ejaj Ahamed - Full Stack Developer',
  description: 'Personal portfolio website of Ejaj Ahamed, a full stack developer specializing in modern web technologies.',
  keywords: 'developer, full stack, web development, React, Node.js, TypeScript',
  authors: [{ name: 'Ejaj Ahamed' }],
  openGraph: {
    title: 'Ejaj Ahamed - Full Stack Developer',
    description: 'Personal portfolio website showcasing projects and skills in web development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeManagerProvider>
          {children}
        </ThemeManagerProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import ThemeProvider from './ThemeProvider';

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

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      accent: string;
      secondary: string;
      card: string;
    };
    navbar: {
      background: string;
      border: string;
      text: string;
      textGradient: string;
    };
    footer: {
      border: string;
    }
  }
  interface PaletteOptions {
    gradient?: {
      primary?: string;
      accent?: string;
      secondary?: string;
    };
    navbar?: {
      background?: string;
      border?: string;
      text?: string;
      textGradient?: string;
    };
    footer: {
      border?: string;
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

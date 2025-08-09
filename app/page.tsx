import React from 'react';
import Head from 'next/head';
import Home from './components/Home';

const SEOHead = ({ title, description, keywords, image }: { title: string; description: string; keywords: string[]; image: string; }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta name="author" content="Ejaj Ahamed Bhuiyan" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Ejaj Ahamed Bhuiyan - Portfolio" />
    
    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    {/* Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ejaj Ahamed Bhuiyan",
          "jobTitle": "Full-Stack Developer",
          "description": description,
          "url": "https://ejajahamedbhuiyan.dev",
          "sameAs": [
            "https://github.com/Ijaj",
            "https://linkedin.com/in/iahmed1400"
          ],
          "knowsAbout": ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Python", "MySql", "PostgreSQL"]
        })
      }}
    />
    
    <link rel="canonical" href="https://ejajahamedbhuiyan.dev" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default function MainPage(){
  // SEO metadata
  const seoData = {
    title: 'Ejaj Ahamed Bhuiyan - Full Stack Developer | React, Next.js, Node.js',
    description: 'Full-stack developer specializing in React, Next.js, and Node.js. 5+ years of experience building scalable web applications. View my portfolio and get in touch.',
    keywords: 'full stack developer, react developer, next.js, node.js, javascript, typescript, portfolio, web development, san francisco'.split(', '),
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face'
  };

  return (
    <>
      <SEOHead {...seoData} />
      <Home />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { useTheme } from '@/components/Layout/ThemeProvider';
import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Services from '@/components/Sections/Services';
import Resume from '@/components/Sections/Resume';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import Footer from '@/components/Sections/Footer';
import { portfolioData } from '@/data/portfolio';

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  const { personal } = portfolioData;

  return (
    <>
      <Helmet>
        <title>{personal.name} - {personal.title}</title>
        <meta name="description" content={personal.bio} />
        <meta name="keywords" content="full-stack developer, devops engineer, react, node.js, aws, software engineer, portfolio" />
        <meta name="author" content={personal.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personal.name} - ${personal.title}`} />
        <meta property="og:description" content={personal.bio} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edensel.dev" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personal.name} - ${personal.title}`} />
        <meta name="twitter:description" content={personal.bio} />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://edensel.dev" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": personal.name,
            "jobTitle": personal.title,
            "email": personal.email,
            "telephone": personal.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": personal.location
            },
            "url": "https://edensel.dev",
            "sameAs": [
              portfolioData.social.linkedin,
              portfolioData.social.github,
              portfolioData.social.twitter
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar isDark={theme === 'dark'} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
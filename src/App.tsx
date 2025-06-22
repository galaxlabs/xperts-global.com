import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import SpecializedServices from './components/sections/SpecializedServices';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Services />
            <TechStack />
            <SpecializedServices />
            <Portfolio />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
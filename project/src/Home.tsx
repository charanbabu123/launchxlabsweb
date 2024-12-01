import Footer from './components/Footer';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen pt-16"> {/* Add padding to prevent overlap */}
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;

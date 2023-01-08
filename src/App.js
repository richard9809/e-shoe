import './App.css';
import Footer from './component/Footer';
import BestSeller from './component/HomeComponent/BestSeller';
import FeaturedProducts from './component/HomeComponent/FeaturedProducts';
import Slogan from './component/HomeComponent/Slogan';
import Testimonials from './component/HomeComponent/Testimonials';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Slogan />
      <FeaturedProducts />
      <BestSeller />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

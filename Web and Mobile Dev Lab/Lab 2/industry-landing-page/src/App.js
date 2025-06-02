
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Entrepreneurs from './components/Entrepreneurs';
import Traders from './components/Traders';

import Partners from './components/Partners';

import Footer from './components/Footer';



function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Hero />
       
      </div>
      <Industries />
      <Entrepreneurs />
      <Traders/>
      <Partners />
      <Footer />
    </div>

    
  );
}

export default App;

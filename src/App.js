import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Footer from './components/footer/footer.component';

import Calculator from './components/calculator/calculator.component';
import CurrencyConverter from './components/currency-converter/currency.converter.component';
import BmiCalculator from './components/bmi-calculator/bmi.calculator.component';
import { About, Contact } from './components/bmi-calculator/pages/pages.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='currency' element={<CurrencyConverter />} />
          <Route path='bmi' element={<BmiCalculator />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Wrapper>
      <Footer />
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}

export default App;
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Basic from './components/calculator/basic.component';
import Footer from './components/footer/footer.component';
import CurrencyConverter from './components/currency-converter/currency.converter.component';
import BmiCalculator from './components/bmi-calculator/bmi.calculator.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Basic />} />
          <Route path='currency' element={<CurrencyConverter />} />
          <Route path='bmi' element={<BmiCalculator />} />
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
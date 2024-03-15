import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.css'
import LogInForm from './components/LogInForm';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path="/login" element={<LogInForm />} />
         <Route path="/cars" element={<CarList />} />
         <Route path="/cars/:carId" element={<CarDetail />} />
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

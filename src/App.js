import React, { useState, useEffect } from 'react';
import './styles.css';
import LogInForm from './components/LogInForm';
import CarList from './components/CarList';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cars');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homeScreen">
      <div className="content">
        <Header />
        {!isLoggedIn ? (
          <LogInForm onLogin={handleLogin} />
        ) : (
          <CarList carData={data} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;

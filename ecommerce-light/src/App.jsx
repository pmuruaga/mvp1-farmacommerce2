import './ShopStyles.css';
// import Public from './Routes/Public';
import MenuNavigation from './Components/MenuNavigation';
import HeaderSlide from './Components/HeaderSlide';
// import { 
//   Routes,
//   Route
// } from 'react-router-dom';
// import Footer from './Components/Footer';
import React, {useState} from 'react';
import AuthProvider from './Context/AuthProvider';

function App() {

  const [showSlide, setShowSlide] = useState(true);

  const toggleShowSlide = (show) => {
    console.log("Seteando Estado desde App", show);    
  };

  return (
    <div className="App">
      <AuthProvider>
        <header className="App-header">    
          <MenuNavigation showSlideSetter={toggleShowSlide} />   
          {/* <p>La Navigation Bar estará aquí</p>      */}
          <HeaderSlide show={showSlide} />     
          Header
        </header>
        <div className="main-container">
          {/* <Public /> */}
          Public Container
        </div>
        <footer>
          {/* <Footer /> */}
          Footer
        </footer>
      </AuthProvider>
    </div>
  );
}

export default App;

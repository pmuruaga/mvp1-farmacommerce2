import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import ProductosAltaPage from '../Pages/ProductosAltaPage';
import ProductosModificarPage from '../Pages/ProductosModificarPage';
import NotFoundPage from '../Pages/NotFoundPage';
import AuthContext from "../Context/AuthContext";
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function Public(props) {
  return (   
        <AuthContext.Consumer>
          {
            context =>
              <Routes>            
                  <Route path="/" element={<HomePage />} /> 
                  <Route path='/home' element={<Navigate to="/" />} />                                     
                  {
                    !context.userLogin && 
                    <>
                      <Route path="/registro" element={<RegisterPage />} />
                      <Route path="/login" element={<LoginPage setLogin={props.setLogin} />} />                            
                    </>
                  }
                  
                  {
                    context.userLogin &&
                    <>
                      <Route path="/productos/alta" element={<ProductosAltaPage />} />
                      <Route path="/productos/modificar/:id" element={<ProductosModificarPage />} />
                    </>
                  }                                          
                  <Route path="/detalle/:id" element={<ProductDetailsPage />} />                                      
                  <Route path="*" element={<NotFoundPage />} />                                    
              </Routes>
          }
        </AuthContext.Consumer>        
  );
}

export default Public;

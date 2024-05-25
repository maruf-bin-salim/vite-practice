

import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import DetailPage from './DetailPage';
import HomePage from './Homepage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPgae';



export function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

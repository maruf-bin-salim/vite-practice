

import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import Detail from './detail';
import HomePage from './Homepage';



export function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

import './App.css';
import Tuiter from './tuiter';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/* <Route index path="/*" element={<Labs/>}></Route> */}
          <Route path="/tuiter/*" element={<Tuiter/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;

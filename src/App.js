import './App.css';
import Labs from "./Labs/index.js"
import HelloWorld from "./Labs/a6/HelloWorld"
import Tuiter from './tuiter';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index path="/*" element={<Labs/>}></Route>
          <Route path="/hello" element={<HelloWorld/>}></Route>
          <Route path="/tuiter/*" element={<Tuiter/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;

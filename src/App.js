import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
 
import Errror from './components/Errror';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Landing from './components/Landing';
import Protected from './components/Protected';

function App() {
  return (
  <>
    {/* <Header /> */}
    {/* <BrowserRouter> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/Landing' element={<Protected Component={Home} />} /> */}
      <Route path='/Landing' element={<Landing />} />
      <Route path='*' element={<Errror />} />
    </Routes>

    {/* </BrowserRouter> */}


  </>
  );
}

export default App;

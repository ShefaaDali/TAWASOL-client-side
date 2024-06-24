import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/login" element={<Landing/>}/>

    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;

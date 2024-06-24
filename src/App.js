import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Navbar from "./components/Navbar";
import store from './redux/store';
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/login" element={<Landing/>}/>

    </Routes>
    </>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

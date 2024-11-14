
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Create from './Component/Create';
import Edit from './Component/Edit';

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;

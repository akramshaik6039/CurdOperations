import Add from './pages/Add';
import './App.css';
import Users from './pages/users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Updateuser from './pages/Updateuser';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/add' element={<Add/>}/>
      <Route path='update/:id' element={<Updateuser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

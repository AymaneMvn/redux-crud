import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import User from './Components/User';
import UpdateUser from './Components/UpdateUser';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
      <h1>Crud React-Redux Crud</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/update-user/:id" element={<UpdateUser/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

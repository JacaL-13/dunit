import './App.css'

import { Route, Routes } from 'react-router';
import { selectItems } from './redux/slices/itemsSlice';
import { useSelector } from 'react-redux';

import Parent from './Components/items/Parent';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Parent />} />
        <Route path='/:itemid' element={<Parent />} />
      </Routes>
    </div>
  );
}

export default App;

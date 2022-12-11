import { Route, Routes } from 'react-router-dom';
import './App.css';
import Theory from './page/Class/Theory';
import Home from './page/home/Home';
import Navbar from './page/navbar/Navbar';
import FundamentalAgain from './primaryRedux/FundamentalAgain';
import MultipleReducerAgain from './primaryRedux/MultipleReducerAgain';

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/theory' element={<Theory />}></Route>
        <Route path='/counter-app' element={<FundamentalAgain />}></Route>
        <Route path='/multipleReducer' element={<MultipleReducerAgain />}></Route>
      </Routes>
    </div>
  );
}

export default App;

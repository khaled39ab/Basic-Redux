import { Route, Routes } from 'react-router-dom';
import './App.css';
import Theory from './page/Class/Theory';
import Home from './page/home/Home';
import Navbar from './page/navbar/Navbar';
import Fundamental from './primaryRedux/Fundamental';
import MultipleReducer from './primaryRedux/MultipleReducer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Theory></Theory> */}
        {/* <Fundamental></Fundamental> */}
        {/* <MultipleReducer></MultipleReducer> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/class' element={<Theory />}></Route>
        <Route path='/fundamental' element={<Fundamental />}></Route>
        <Route path='/multipleReducer' element={<MultipleReducer />}></Route>
      </Routes>
    </div>
  );
}

export default App;

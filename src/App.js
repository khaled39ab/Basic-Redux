import './App.css';
import Theory from './page/Class/Theory';
import Fundamental from './primaryRedux/Fundamental';
import MultipleReducer from './primaryRedux/MultipleReducer';

function App() {
  return (
    <div>
      {/* <Theory></Theory> */}
      <Fundamental></Fundamental>
      <MultipleReducer></MultipleReducer>
    </div>
  );
}

export default App;

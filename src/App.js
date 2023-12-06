import './App.css';
import ClassComponent from './components/ComponentsTypes/ClassComponent';
import { FunctionalComponets } from './components/ComponentsTypes/FunctionalComponets';
import UseEffect from './components/Hooks/UseEffect';
import UseState from './components/Hooks/UseState';

function App() {
  return (
    <div className="App">
      <p>6 Dec 2023</p>
      {/* Class Components */}
      <ClassComponent/>
      {/* Function Components */}
      <FunctionalComponets/>

      {/* Hooks */}
      <UseState/>
      <UseEffect/>
    </div>
  );
}

export default App;

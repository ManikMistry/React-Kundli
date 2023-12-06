import './App.css';
import ClassComponent from './components/ComponentsTypes/ClassComponent';
import { FunctionalComponets } from './components/ComponentsTypes/FunctionalComponets';
import UseState from './components/Hooks/UseState';

function App() {
  return (
    <div className="App">
      <p>6 Dec 2023</p>
      {/* Class Components */}
      <ClassComponent/>
      {/* Function Components */}
      <FunctionalComponets/>
      
      <UseState/>
    </div>
  );
}

export default App;

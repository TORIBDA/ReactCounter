import './styles/App.css';
import "./styles/Counter.css";
import MultipleCounter from './components/MultipleCounter';

function App() {
  return (
    <div className="App">
      <div className="MultipleCounter">
        <h1>Hello Counter!</h1>
          <MultipleCounter></MultipleCounter>
      </div>
    </div>
  );
}

export default App;

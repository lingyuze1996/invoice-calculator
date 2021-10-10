import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>发票金额分配计算器</h1>
      </header>
      <div className="App-body">
        <Calculator />
      </div>
      <footer className="App-footer"><b>© Copyright - 2021 - Yuze Ling </b></footer>
    </div>
  );
}

export default App;

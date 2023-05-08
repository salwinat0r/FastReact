import logo from './logo.svg';
import './App.css';
import Message from './component/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;

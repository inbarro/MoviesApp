import logo from './assets/images/Logo2.png';
import './App.css';
import MoviesList from './components/MoviesList/MoviesList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
          <MoviesList />
        <p>main</p>
      </main>
    </div>
  );
}

export default App;

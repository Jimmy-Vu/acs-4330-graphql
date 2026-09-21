import Weather from './Weather'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-eyebrow">ACS 4330</p>
        <h1>Local Weather</h1>
        <p className="App-subtitle">Look up conditions by U.S. zip code</p>
      </header>
      <Weather />
    </div>
  )
}

export default App

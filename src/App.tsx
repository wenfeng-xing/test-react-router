import { useState } from 'react'
import { Link } from 'react-router-dom'
import First from './pages/first'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <First />
      <Link to="/first">First</Link>
      <Link to="/second/AAPL">Second</Link>
    </div>
  )
}

export default App

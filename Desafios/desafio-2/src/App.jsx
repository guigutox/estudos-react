import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Challenge/>
    </>
  )
}

export default App

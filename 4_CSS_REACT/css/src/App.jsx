import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/*CSS EM COMPONENTE */}
      <MyComponent/>
      <p>Este paragrafo é do APP JSX</p>
    </>
  )
}

export default App

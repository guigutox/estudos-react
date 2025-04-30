import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)
  const n = 5;

  const redTitle = false;

  return (
    <>
      {/*CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/*CSS EM COMPONENTE */}
      <MyComponent/>
      <p>Este paragrafo é do APP JSX</p>
      {/*Inline CSS */}
      <p style={{color: "blue", backgroundColor: "white", padding: "250px"}}>Paragrafo inline</p>

      {/* CSS INLINE DINAMICO */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS dinâmico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS dinâmico</h2>

      {/*Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title" }> Este título vai ter classe dinâmica!</h2>
        
      
    </>
  )
}
export default App

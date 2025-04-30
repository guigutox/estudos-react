import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>FORMS</h2>
     <MyForm/>
     
    </>
  )
}

export default App

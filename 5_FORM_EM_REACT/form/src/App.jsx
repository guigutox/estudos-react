import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h2>FORMS</h2>
     <MyForm user={{name: "Guilherme", email: "guihlerme@gmail.com", bio: "Sou um advogado", role: "admin"}}/>
     
    </>
  )
}
export default App

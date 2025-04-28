import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)
  const pessoas = [
    {nome: "Joao", idade: 20, profissao: "arquiteto"},
    {nome: "Maria", idade: 23, profissao: "padeira"},
    {nome: "Rafael", idade: 15, profissao: "estudante"},
  ]

  return (
    <>
        <div>
        {pessoas.map((pessoa)=>(
          <UserDetails nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
        ))}
        </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import CarDetails from './Components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand: "Toyota", name: "Corolla", year: "2020"},
    {id: 2, brand: "Honda", name: "Civic", year: "2021"},
    {id: 3, brand: "VW", name: "Gol", year: "2000"},
  ]

  return (
    <>
    <h1>Esse é o 4º Desafio</h1>
    {cars.map((car) =>(
      <CarDetails key={car.id}
        brand={car.brand} name={car.name} year={car.year}
      />

    ))}
      
    </>
  )
}

export default App

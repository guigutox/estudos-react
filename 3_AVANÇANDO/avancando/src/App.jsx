import { useState } from 'react'

import './App.css'
import CharizardY from './assets/Charizard-mega-y.png'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'

function App() {
  const [count, setCount] = useState(0)
  const name = "Guilherme 2"
  const [username] = useState("Guijogos")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Ford", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Honda", color: "Branco", newCar: false, km: 110},
  ]
  return (
    <>
    <div>
      <h1>SEÇÃO 3</h1>
      {/* Acessar imagem em public */}
      <div>
        <img src="/Charizard-mega-x.png" alt="Charizard x mega" />
      </div>
      <div>
        {/*Imagem em asset*/}
        <img src={CharizardY} alt="Charizard Y mega" />
      </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/*PROPS*/}
        <ShowUserName name={name}/>
        <ShowUserName name={username}/>
        {/*Destructering*/}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
        <CarDetails brand="Ford" color="Branco" km={3000} newCar={true}/>
        <CarDetails brand="Audi" color="Vermelho" km={600} newCar={true}/>
        {/* loop com array de objetos */}
        {cars.map((car) => (
          <CarDetails brand={car.brand} color={car.color} km = {car.km} newCar = {car.newCar} />
        ))}
        {/*Fragment*/}
        <Fragment propFragment="Teste" />
      </div>
    </>
  )
}

export default App

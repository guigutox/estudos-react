import { useState } from 'react'

import './App.css'
import CharizardY from './assets/Charizard-mega-y.png'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)
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
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

//styles /CSS
import './App.css'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions/>
      <Events/>
    </div>
  )
}

export default App

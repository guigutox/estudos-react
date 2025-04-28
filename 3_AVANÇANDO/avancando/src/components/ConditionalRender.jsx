import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name, setName] = useState("Joã")

  return (
    <div>
    <h1>Isso será exibido?</h1>
    {x && <p>Se X for true, sim</p>}   
    {!x && <p>Agora X é falso</p>}
    {name  === "João" ? (
        <div>
            <p>O nome é João</p>
        </div>
    ) : (
        <div>
            <p>O nome não é João</p>
        </div>
    )}
    <button onClick={() => setName('João')}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender
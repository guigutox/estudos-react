const Challenge = () => {
    const x = 1;
    const y = 2;

    const somar = () =>{
        console.log(x+y)
    }

    return (
        <div>
        <h2>Valor 1 = {x}</h2>
        <h2>Valor 2 = {y}</h2>
        <h2>SOMA: {x} + {y} = {x+y}</h2>

        <button onClick={somar}>Somar no console</button>

        </div>
    )

}

export default Challenge;
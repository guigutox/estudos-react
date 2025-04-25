const Events = () => {
    const handleMyEvent = (e) => {
        console.log("FUNCIONOU");
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso !</h1>
        }else{
            return <h1>Também posso reenderizar isso</h1>
        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui para testar</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;
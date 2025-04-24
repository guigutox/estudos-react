const Events = () => {
    const handleMyEvent = (e) => {
        console.log("FUNCIONOU")
    };
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui para testar</button>
            </div>
        </div>
    );
};

export default Events;
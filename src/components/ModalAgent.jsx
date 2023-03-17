function ModalAgent(props) {
    const {agent,toggleModal} = props;

    return (  
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25  flex items-center justify-center">
            <div className="card">
                <h1 className="text-black text-4xl font-bold">{agent.displayName}</h1>
                <img src={agent.fullPortrait} className="w-96 h-96"/>
                <button onClick={toggleModal} className="text-black">Salir</button>
            </div>
        </div>
    );
}

export default ModalAgent;
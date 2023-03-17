function ModalAgent(props) {
    const {agent} = props;

    return (  
        <div className="fixed inset-0 bg-black bg-opacity-25  flex items-center justify-center">
            <div className="card">
                <h1 className="text-black text-4xl font-bold">{agent.displayName}</h1>
                <img src={agent.fullPortrait} className="w-96 h-96"/>
            </div>
        </div>
    );
}

export default ModalAgent;
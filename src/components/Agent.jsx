import Ability from './Ability';

function Agent({agent}){      
        return(
            <div className='card'>
                <div className='flex justify-center'>
                    <div className='relative'>
                        <img className='rounded-full h-60 w-60' src={agent.displayIconSmall} alt={agent.displayName}/>                                        
                        <img className='absolute bottom-0 right-0 rounded-full h-16 w-16 bg-slate-900 border-4 border-slate-900' src={agent.role.displayIcon} alt={agent.role.displayName}/>                                        
                    </div>
                </div> 
                <h2 className='mt-6 text-3xl font-semibold text-center'>{agent.displayName}</h2>
                <p className='my-8 mx-9 text-justify'>{agent.description}</p>
                <Ability ability={agent.abilities} />
            </div>
        )
    
}

export default Agent;
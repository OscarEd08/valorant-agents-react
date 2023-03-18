import { useState } from "react";
import VoiceAgent from "./VoiceAgent";

function AbilityModal(props){
    const [selectedAbility, setSelectedAbility] = useState({
        description: props.ability[0].description,
        name: props.ability[0].displayName
    });

    const [showText, setShowText] = useState(false);

    const handleAbility = (abilityDescription, abilityName) => {
        setSelectedAbility({description: abilityDescription, name: abilityName})
        setShowText(false)
    }
    

    
    
    return(
        <div className="flex flex-col md:flex-row mt-12 md:mt-0 md:-ml-28 items-center justify-center z-10">
            <div className="flex flex-row md:flex-col">
                {props.ability.map((ability)=> {
                    return(
                        ability.displayIcon && (
                            <div key={ability.slot} >
                                <button onClick={() => handleAbility(ability.description, ability.displayName)}>
                                    <img className={`mx-2 md:mx-4 p-1 rounded-full w-12 h-12 md:h-14 md:w-14 
                                        ${selectedAbility.description === ability.description && selectedAbility.name === ability.displayName? "bg-neutral-800 dark:bg-neutral-900" : "invert-[0.85] dark:invert-0"}`}
                                        src={ability.displayIcon} alt={ability.displayName}/>                            
                                </button>                                                    
                            </div>
                        )
                    )                
                })}
                
            </div>
            <div className="text-justify mx-14 w-56 static">
                <p className="text-lg sm:text-sm my-2 text-center md:text-left md:text-xl md:-mx-7 md:mb-3 font-extrabold">{selectedAbility.name}</p>
                    {selectedAbility.description.length <= 150?
                        <p className="text-[12px] sm:text-[11px] -mx-12 sm:-mx-16 md:text-sm md:-mx-7 ">{selectedAbility.description}</p>
                        :
                        <p className="text-[12px] sm:text-[11px] -mx-12 sm:-mx-16 md:text-sm md:-mx-7 ">{selectedAbility.description.slice(0,150)}
                            <p className={`${showText? "inline": "hidden"}`}>{selectedAbility.description.slice(100)}</p>            
                            <div className="grid justify-items-center">
                            <button   
                                className="mt-5"                              
                                onClick={() => setShowText(!showText)}
                            >{showText?       
                                <div className="grid justify-items-center">                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                </svg> 
                                <p className="font-black text-[10px] tracking-widest">SHOW LESS</p>                      
                                </div>                                             
                                :
                                <div className="grid justify-items-center">
                                <p className="font-black text-[10px] tracking-widest">SHOW MORE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                </svg>
                                </div>
                                } 
                            </button>    
                            </div>
                        </p>    
                    }
                
                            
                
            </div>        
        </div>
    )
}

function ModalAgent(props) {
    const {agent,toggleModal} = props;

    return (  
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="card-large dark:bg-background relative">
                <div className="flex justify-between relative">
                    <div className="z-10 ml-4 md:ml-[280px] xl:ml-[480px] mb-4 text-black dark:text-white font-bold">
                        <h1 className="text-3xl  xl:text-4xl">{agent.displayName}</h1>
                        <h2 >{agent.role.displayName}</h2>
                    </div>
                    <button onClick={toggleModal} className="absolute right-0 lg:-rigth-10 xl:right-0 xl:bottom-20 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center static">
                <div className="relative md:-ml-16 -mb-10">
                    <img src={agent.background} className="h-[450px] w-[550px] -mt-20 mb-2 md:h-[350px] md:w-[350px] md:mr-20 md:-mt-20 md:mb-5  xl:h-[500px] xl:w-[500px] xl:mr-32 xl:-mt-32 xl:-mb-16 invert-[0.70] dark:invert-[0.3] " />
                    <img src={agent.fullPortrait} alt={agent.displayName} className="bottom-2 w-[500px] h-[470px] md:w-[450px] md:-mb-0 md:bottom-0 md:right-10 xl:h-[630px] xl:w-[630px] absolute xl:-mb-12 xl:-bottom-10 xl:right-14"/>
                </div>

                    <AbilityModal ability={agent.abilities} />
                </div>                
                <VoiceAgent voiceAgent={agent.voiceLine.mediaList[0].wave} />
            </div>
        </div>
    );
}

export default ModalAgent;
import { useState } from "react";
import VoiceAgent from "./VoiceAgent";

function AbilityModal(props){
    const [selectedAbility, setSelectedAbility] = useState(props.ability[0].description);

    const handleAbility = (abilityDescription) => setSelectedAbility(abilityDescription)

    return(
        <div className="flex flex-row -ml-28 -mt-10 items-center justify-center z-10">
        <div className="flex flex-col">
            {props.ability.map((ability)=> {
                return(
                    ability.displayIcon && (
                        <div key={ability.slot} >
                            <button onClick={() => handleAbility(ability.description)}>
                                <img className={`mx-4 p-1 rounded-full w-10 h-10 sm:h-14 sm:w-14 
                                    ${selectedAbility === ability.description ? "bg-neutral-800 dark:bg-neutral-900" : "invert-[0.85] dark:invert-0"}`}
                                    src={ability.displayIcon} alt={ability.displayName}/>                            
                            </button>                                                    
                        </div>
                    )
                )                
            })}
            
        </div>
        <div className="text-justify mx-14 w-56 static">
            <p className="text-sm -mx-7 ">{selectedAbility}</p>
        </div>        
        </div>
    )
}

function ModalAgent(props) {
    const {agent,toggleModal} = props;

    return (  
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="card-large dark:bg-background relative">
                <div className="flex justify-between">
                    <div className="z-10 text-black dark:text-white font-bold">
                        <h1 className=" text-4xl">{agent.displayName}</h1>
                        <h2 >{agent.role.displayName}</h2>
                    </div>
                    <button onClick={toggleModal} className="-mt-5 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center static">
                <div className="relative ml-7 -mb-10">
                    <img src={agent.background} className=" h-[300px] mr-32 mt-2 invert-[0.70] dark:invert-[0.3] " />
                    <img src={agent.fullPortrait} alt={agent.displayName} className="h-[340px] absolute bottom-7 right-14"/>
                </div>

                    <AbilityModal ability={agent.abilities} />
                </div>                
                <VoiceAgent voiceAgent={agent.voiceLine.mediaList[0].wave} />
            </div>
        </div>
    );
}

export default ModalAgent;
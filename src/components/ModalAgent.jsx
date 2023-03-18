import { useState } from "react";
import VoiceAgent from "./VoiceAgent";

function AbilityModal(props){
    const [selectedAbility, setSelectedAbility] = useState({
        description: props.ability[0].description,
        name: props.ability[0].displayName
    });

    const handleAbility = (abilityDescription, abilityName) => setSelectedAbility({
        description: abilityDescription, name: abilityName
    })
    
    return(
        <div className="flex flex-row -ml-28 items-center justify-center z-10">
        <div className="flex flex-col">
            {props.ability.map((ability)=> {
                return(
                    ability.displayIcon && (
                        <div key={ability.slot} >
                            <button onClick={() => handleAbility(ability.description, ability.displayName)}>
                                <img className={`mx-4 p-1 rounded-full w-10 h-10 sm:h-14 sm:w-14 
                                    ${selectedAbility.description === ability.description && selectedAbility.name === ability.displayName? "bg-neutral-800 dark:bg-neutral-900" : "invert-[0.85] dark:invert-0"}`}
                                    src={ability.displayIcon} alt={ability.displayName}/>                            
                            </button>                                                    
                        </div>
                    )
                )                
            })}
            
        </div>
        <div className="text-justify mx-14 w-56 static">
            <p className="text-xl -mx-7 mb-3 font-extrabold">{selectedAbility.name}</p>
            <p className="text-sm -mx-7 ">{selectedAbility.description}</p>
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
                    <div className="z-10 ml-[480px] mb-4 text-black dark:text-white font-bold">
                        <h1 className=" text-4xl">{agent.displayName}</h1>
                        <h2 >{agent.role.displayName}</h2>
                    </div>
                    <button onClick={toggleModal} className="-mt-28 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center static">
                <div className="relative -ml-16 -mb-10">
                    <img src={agent.background} className=" h-[500px] w-[500px] mr-32 -mt-32 -mb-16 invert-[0.70] dark:invert-[0.3] " />
                    <img src={agent.fullPortrait} alt={agent.displayName} className="h-[630px] w-[630px] absolute -mb-12 -bottom-10 right-14"/>
                </div>

                    <AbilityModal ability={agent.abilities} />
                </div>                
                <VoiceAgent voiceAgent={agent.voiceLine.mediaList[0].wave} />
            </div>
        </div>
    );
}

export default ModalAgent;
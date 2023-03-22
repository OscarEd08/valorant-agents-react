import { useState } from "react";
import AbilityIcons from './AbilityIcons';
import AbilityDescription from "./AbilityDescription";

function AbilityModal({ability}) {
    const [selectedAbility, setSelectedAbility] = useState({
      description: ability[0].description,
      name: ability[0].displayName,
    });
  
    const [showText, setShowText] = useState(false);
  
    const handleAbility = (abilityDescription, abilityName) => {
      setSelectedAbility({ description: abilityDescription, name: abilityName });
      setShowText(false);
    };
  
    return (
      <div className="flex flex-col md:flex-row mt-12 md:mt-0 md:-ml-28 items-center justify-center z-10">
        <AbilityIcons ability={ability} selectedAbility={selectedAbility} handleAbility={handleAbility}/>
        <AbilityDescription selectedAbility={selectedAbility} showText={showText} setShowText={setShowText}/>
      </div>
    );
  }

export default AbilityModal;
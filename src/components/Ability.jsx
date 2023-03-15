function AbilityList(props) {
    return (
        <tbody>
            <tr>
                {props.ability.map(ability => {
                    return (      
                        //Validamos que muestre solo las habilidades que tienen icono                                                                            
                        ability.displayIcon && (
                            <td key={ability.slot} >
                                <img className={`mx-4 p-1 rounded-full h-16 w-16 
                                ${ability.slot === "Ultimate" ? "bg-neutral-800" : "invert-[0.85]"}`}
                                src={ability.displayIcon} alt={ability.displayName}/>
                            </td>
                        )                                  
                    )
                })}
            </tr>
            <tr>
                {props.ability.map(ability => {
                    return (
                        ability.displayIcon && (
                            <td key={ability.slot} className="pt-2 w-24 text-center text-xs font-bold text-gray-800" >
                                {ability.displayName}
                            </td>
                        )
                    )   
                })}                
            </tr>
        </tbody>
    )
}

function Ability({ability}){
    return(
        <div className="flex justify-center">        
            <table>                 
                <AbilityList ability={ability} />                                                        
            </table>
        </div>
    )
}

export default Ability;